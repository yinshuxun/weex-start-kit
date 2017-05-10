package com.nat.weex;

import com.nat.network_transfer.HLModuleResultListener;
import com.nat.network_transfer.HLTransferModule;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

/**
 * Created by Daniel on 17/2/17.
 * Copyright (c) 2017 Nat. All rights reserved.
 */

public class NetworkTransferModule extends WXModule {

    @JSMethod
    public void upload(String str, final JSCallback jsCallback){
        HLTransferModule.getInstance().upload(str, new HLModuleResultListener() {
            @Override
            public void onResult(Object o) {
                jsCallback.invoke(o);
            }
        });
    }

    @JSMethod
    public void download(String str, final JSCallback jsCallback){
        HLTransferModule.getInstance().download(str, new HLModuleResultListener() {
            @Override
            public void onResult(Object o) {
                jsCallback.invokeAndKeepAlive(o);
            }
        });
    }
}
