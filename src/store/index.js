import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import fbConfig from '../config/fbConfig';

const store = createStore(reducers,
    compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig), reactReduxFirebase(fbConfig)
    )
);

export default store;