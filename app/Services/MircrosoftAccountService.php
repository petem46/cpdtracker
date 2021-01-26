<?php

namespace App\Services;

use App\MicrosoftAccount;
use App\User;
use Carbon\Carbon;
use Laravel\Socialite\Contracts\User as ProviderUser;

class MicrosoftAccountService
{

  public function createOrGetUser(ProviderUser $providerUser)
  {
    $account = MicrosoftAccount::whereProvider('microsoft')
    ->whereProviderUserId($providerUser->getId())
    ->first();
    if(User::checkGarstang($providerUser->getEmail()) === 'fail') {
      return 'fail';
    };
    // dd(User::getGoogleSchool($providerUser->getEmail()));
    // dd($providerUser->getName());
    if ($account) {
      $user = User::whereEmail($providerUser->getEmail())->first();
      if ($user) {
        $user->name = $providerUser->getName();
        $user->school = User::getGoogleSchool($providerUser->getEmail());
        // $user->avatar = $providerUser->getAvatar();
        $user->avatar = 'avatar';
        $user->password = md5(rand(1, 10000));
        $user->last_login_at = Carbon::now()->toDateTimeString();
        $user->token = $providerUser->token;
        $user->refreshToken = $providerUser->refreshToken;
        $user->expiresIn = $providerUser->expiresIn;
        $user->touch();
        $user->save();
        $account->user()->associate($user);
        $account->save();
        return $user;
      } else {
        $user->name = $providerUser->getName();
        $user->school = User::getGoogleSchool($providerUser->getEmail());
        // $user->avatar = $providerUser->getAvatar();
        $user->avatar = 'avatar';
        $user->password = md5(rand(1, 10000));
        $user->last_login_at = Carbon::now()->toDateTimeString();
        $user->token = $providerUser->token;
        $user->refreshToken = $providerUser->refreshToken;
        $user->expiresIn = $providerUser->expiresIn;
        $user->touch();
        $user->save();
        $account->user()->associate($user);
        $account->save();
        return $account->user;
      }
    } else {
      $account = new MicrosoftAccount([
        'provider_user_id' => $providerUser->getId(),
        'provider' => 'microsoft'
      ]);

      $user = User::whereEmail($providerUser->getEmail())->first();
      if (!$user) {
        $user = User::create([
          'email' => $providerUser->getEmail(),
          'name' => $providerUser->getName(),
          // 'avatar' => $providerUser->getAvatar(),
          'avatar' => 'avatar',
          'school' => User::getGoogleSchool($providerUser->getEmail()),
          'password' => md5(rand(1, 10000)),
          'usergroup_id' => '5',
          'role_id' => '3',
          'last_login_at' => Carbon::now()->toDateTimeString(),
          'token' => $providerUser->token,
          'refreshToken' => $providerUser->refreshToken,
          'expiresIn' => $providerUser->expiresIn,
          // 'last_login_ip' => $request->getClientIp()
        ]);
      }
      $account->user()->associate($user);
      $account->save();
      return $user;
    }
  }
}
