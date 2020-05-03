/*
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *  Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

'use strict';

module.exports = {
    name: 'alexa-litexa-helloworld',
    deployments: {
        development: {
            module: '@litexa/deploy-aws',
            s3Configuration: {
                bucketName: 'litexa-helloworld'
            },
            askProfile: 'default',
            awsProfile: 'ask_cli_default'
        }
    },
    extensionOptions: {}
};
