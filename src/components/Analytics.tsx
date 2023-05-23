"use client";
import { useEffect } from "react";
import * as Fathom from "fathom-client";

const Analytics = () => {
  useEffect(() => {
    Fathom.load("KGIOLRMH", {
      includedDomains: ["anthropoc.com"],
    });

    const onRouteChange = () => Fathom.trackPageview();

    window.addEventListener("routeChange", onRouteChange);
    return () => window.removeEventListener("routeChange", onRouteChange);
  }, []);

  return null;
};

export default Analytics;