import React, { useEffect, useState } from 'react';
import {firebase} from '../firebase/firebaseConfig';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';

import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {
            
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn( true );

                
                dispatch(startLoadingNotes(user.uid))


            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);

        } )

    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }
    
    
    return (
        <Router>

            <div>
                <Switch>
                    {

                                
                        isLoggedIn
                        ?
                        <Route 
                            exact
                            path={'/'}
                            component={ JournalScreen }
                        />
                        
                        :
                        <Route 
                            path={'/auth'}
                            component={ AuthRouter }
                        />

                    }

                    <Redirect to={isLoggedIn?'/':'/auth/login'}/>

                </Switch>
            </div>

        </Router>
    )
}
