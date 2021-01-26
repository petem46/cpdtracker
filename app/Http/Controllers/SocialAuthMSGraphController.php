<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Socialite;
use App\Services\MicrosoftAccountService;
class SocialAuthMSGraphController extends Controller
{
  /**
   * Create a redirect method to google api.
   *
   * @return void
   */
    public function redirect()
    {
      return Socialite::driver('microsoft')->redirect();
    }
/**
     * Return a callback method from google api.
     *
     * @return callback URL from google
     */
    public function callback(MicrosoftAccountService $service)
    {
        $user = $service->createOrGetUser(Socialite::driver('microsoft')->user());
        if($user === 'fail') {
          return redirect()->to('/login')->with('fail','Some message here.');
          sleep(3);
        }
        auth()->login($user);
        return redirect()->to('/home');
    }
}
