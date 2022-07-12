import { applyMiddleware, createStore, compose } from "redux";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";
import * as localforage from "localforage";

offlineConfig.persistOptions = { storage: localforage }; // store offline data in indexedDB

const customConfig = {
  ...offlineConfig,
  effect: async (effect, action) => {
    const res = await fetch(effect.url, {
      method: effect.method,
      body: effect.body,
      headers: effect.headers,
    })
    return res.json()

  }
};

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk, logger), offline(customConfig))
);

export default store;
