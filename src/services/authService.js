export const signIn = async (username, password) => {
    try {
        // dispatch(setLoading(true));

        // const login = await authRepository.signIn(username, password);
        console.log("Login");
        // dispatch(setCurrentUser(login));
        // dispatch(setAccessToken(login));

        // localStorage.setItem("me", JSON.stringify(ssoDTO.me));
        // localStorage.setItem("access_token", ssoDTO.access_token);

        // dispatch(setLoading(false));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response?.status == 401)
                dispatch(setError(error.response.data));
            else if (error.response?.status == 400)
                dispatch(setError(error.response.data));
            else
                dispatch(setError(strings.errorMsg));

        } else if (error instanceof Object) {
            dispatch(setError(strings.errorMsg));
        } else
            dispatch(setError(strings.errorMsg));
    }

}