/*
 *  Licensed to the Apache Software Foundation (ASF) under one
 *  or more contributor license agreements.  See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership.  The ASF licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */


import Authenticator, { AuthenticatorOptions } from './authenticator.js';

export type SaslAuthenticatorOptions = AuthenticatorOptions & {
  mechanism?: any;
};

export default class SaslAuthenticator extends Authenticator {
  /**
   * Creates a new instance of SaslAuthenticator.
   * @param {Object} [options] The authentication options.
   * @param {Object} [options.mechanism] The mechanism to be used for authentication.
   * @constructor
   */
  constructor(options: SaslAuthenticatorOptions) {
    super(options);

    if (options.mechanism === null || options.mechanism === undefined) {
      throw new Error('No Sasl Mechanism Specified');
    }
  }

  /**
   * Evaluates the challenge from the server and returns appropriate response.
   * @param {String} challenge Challenge string presented by the server.
   * @return {Object} A Promise that resolves to a valid sasl response object.
   */
  evaluateChallenge(challenge: string) {
    return this.options.mechanism.evaluateChallenge(challenge);
  }
}
