#!/bin/bash

export SW_FAMILY_NAME=Doe
export SW_GIVEN_NAME=John
export SW_RES_CODE=ABCD12
export SW_PHONE_NUM='8885551212'

SCRIPT_WORKING_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "${SCRIPT_WORKING_DIR}"

npm run nightwatch