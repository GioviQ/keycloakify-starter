import { lazy } from "react";
import { KcAccountUiLoader } from "@keycloakify/keycloak-account-ui";
import type { KcContext } from "./KcContext";
import "./main.css";

const KcAccountUi = lazy(() => import("@keycloakify/keycloak-account-ui/KcAccountUi"));

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    return <KcAccountUiLoader
    kcContext={kcContext}
    KcAccountUi={KcAccountUi}
    logoUrl={`${import.meta.env.BASE_URL}assets/images/logo.svg`}
    content={[
        {
            label: "personalInfo",
            path: ""
        },
        {
            label: "accountSecurity",
            children: [
                {
                    label: "signingIn",
                    path: "account-security/signing-in"
                },
                {
                    label: "deviceActivity",
                    path: "account-security/device-activity"
                },
                {
                    label: "linkedAccounts",
                    path: "account-security/linked-accounts",
                    isVisible: "isLinkedAccountsEnabled"
                }
            ]
        }
    ]}
     />;
}
