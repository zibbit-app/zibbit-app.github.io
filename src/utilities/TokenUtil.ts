import { AuthTokenInfo } from "../models/AuthTokenInfo";

export class TokenUtil {
    private static accessKey = "accessKey";
    private static refreshKey = "refreshKey";

    
    get isAutheticated(): boolean {
        var token = this.accessToken;
        return token != null;
    }

    get accessToken(): string {
        var token = window.localStorage.getItem(TokenUtil.accessKey);
        return token;
    }

    get refreshToken(): string {
        var token = window.localStorage.getItem(TokenUtil.refreshKey);
        return token;
    }

    getAuthInfo(): AuthTokenInfo{
        var info = new AuthTokenInfo();
        info.accessToken = this.accessToken;
        info.refreshToken = this.refreshToken;
        return info;
    }


    setAuthInfo(info: AuthTokenInfo){
        if(info)
        {
            window.localStorage.setItem(TokenUtil.accessKey, info.accessToken);
            window.localStorage.setItem(TokenUtil.refreshKey, info.refreshToken);
        }
        else
        {
            window.localStorage.removeItem(TokenUtil.accessKey);
            window.localStorage.removeItem(TokenUtil.refreshKey);
        }
    }


    getAuthHeader(): string{
        var token = this.accessToken;
        var authHeader = token ? `Bearer ${token}` : null;
        return authHeader;
    }
}