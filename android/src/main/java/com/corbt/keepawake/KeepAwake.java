// Adapted from
// https://github.com/gijoehosaphat/react-native-keep-screen-on

package com.corbt.keepawake;

import android.app.Activity;
import android.view.WindowManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class KeepAwake extends ReactContextBaseJavaModule {

    private Activity mActivity = null;
    private ReactApplicationContext mContext = null;

    public KeepAwake(ReactApplicationContext reactContext, Activity mActivity) {
        super(reactContext);
        this.mActivity = mActivity;
        this.mContext = reactContext;
    }

    @Override
    public String getName() {
        return "KeepScreenOn";
    }

    @ReactMethod
    public void activate() {
        this.mActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                KeepAwake.this.mActivity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            }
        });
    }

    @ReactMethod
    public void deactivate() {
        this.mActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                KeepAwake.this.mActivity.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            }
        });
    }
}