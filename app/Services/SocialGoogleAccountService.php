<?php

namespace App\Services;

use App\SocialGoogleAccount;
use App\User;
use Carbon\Carbon;
use Laravel\Socialite\Contracts\User as ProviderUser;

class SocialGoogleAccountService
{

  public function createOrGetUser(ProviderUser $providerUser)
  {
    $account = SocialGoogleAccount::whereProvider('google')
      ->whereProviderUserId($providerUser->getId())
      ->first();

    if ($account) {
      $user = User::whereEmail($providerUser->getEmail())->first();
      if ($user) {
        $user->name = $providerUser->getName();
        $user->school = User::getGoogleSchool($providerUser->getEmail());
        $user->avatar = $providerUser->getAvatar();
        $user->password = md5(rand(1, 10000));
        $user->last_login_at = Carbon::now()->toDateTimeString();
        $user->touch();
        $user->save();
        $account->user()->associate($user);
        $account->save();
        return $user;
      } else {
        $user->name = $providerUser->getName();
        $user->school = User::getGoogleSchool($providerUser->getEmail());
        $user->avatar = $providerUser->getAvatar();
        $user->password = md5(rand(1, 10000));
        $user->last_login_at = Carbon::now()->toDateTimeString();
        $user->touch();
        $user->save();
        $account->user()->associate($user);
        $account->save();
        return $account->user;
      }
    } else {
      $account = new SocialGoogleAccount([
        'provider_user_id' => $providerUser->getId(),
        'provider' => 'google'
      ]);

      $user = User::whereEmail($providerUser->getEmail())->first();
      if (!$user) {
        $user = User::create([
          'email' => $providerUser->getEmail(),
          'name' => $providerUser->getName(),
          'avatar' => $providerUser->getAvatar(),
          'school' => User::getGoogleSchool($providerUser->getEmail()),
          'password' => md5(rand(1, 10000)),
          'usergroup_id' => '5',
          'role_id' => '3',
          'last_login_at' => Carbon::now()->toDateTimeString(),
          // 'last_login_ip' => $request->getClientIp()
        ]);
      }
      $account->user()->associate($user);
      $account->save();
      return $user;
    }
  }
}
