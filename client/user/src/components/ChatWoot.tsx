"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
const crypto = require("crypto");

const Chatwoot = () => {
  // const supabase = createClientComponentClient();
  useEffect(() => {
    // async function getUser() {
    //   const {
    //     data: { user },
    //     error,
    //   } = await supabase.auth.getUser();
    //   return user?.id;
    // }
    // const userId = getUser();
    // Add Chatwoot Settings
    (window as any).chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "en",
      type: "standard",
    };
    // const key = "cHuiCfMQ1ff9tjvnBsRTLwUK";

    // const identifierHash = crypto
    //   .createHmac("sha256", key)
    //   .update(userId)
    //   .digest("hex");

    // window.$chatwoot.setUser(userId, {
    //   name: "wigure",
    //   email: "truonganfi@gmail.com",
    //   identifier_hash: identifierHash,
    // });
    (function (d, t) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement<any>(t),
        s = d.getElementsByTagName<any>(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        (window as any).chatwootSDK.run({
          websiteToken: "axcKPyMuDyfWoK1UtjwXi4kC", // add you secret token here,
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);

  return null;
};

export default Chatwoot;
