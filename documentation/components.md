Bart Components

react-app/src/App.js

react-app/src/components/
    /auth
        LoginForm.js
        LogoutButton.js
        ProtectedRoute.js
        SignUpForm.js

    /User.js
    /UsersList.js

react-app/src/services/auth.js
    aka utils
    could use as thunk middlewear
        authenticate
        login
        logout
        signUp


Not Logged In
    - Route (/sign-up)
        SignUpForm - Material UI
    - Route (/login)
        LoginForm - Material UI

App
    - BrowserRouter
        - NavBar
            - Route (/login)
                LoginForm - Material UI
            - Route (/main-page)
                MainPage

NavBar - Material UI
    - NavLink

MainPage
    - SideBar


Mike Components

End Goal

App
Not Logged In
    - Route (/sign-up)
        SignUpForm - Material UI
    - Route (/login)
        LoginForm - Material UI

    Logged In:
    - BrowserRouter
            - Route (/login)
                LoginForm - Material UI
            - Route (/main-page)
                MainPage
                    - SideBar
                        - BrowserRouter
                            - AllNotes (MP and E)
                            - Notebooks (MP and E)
                    - MiddlePanel
                    - Editor
