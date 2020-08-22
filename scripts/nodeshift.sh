#!/usr/bin/env bash

DIR=$(dirname "$0")
source ${DIR}/common/logger.sh
source ${DIR}/common/util.sh

USAGE="Usage: "`basename $0`" [deploy|undeploy]"

APP_NAME=navigation

if [ -z "${NAMESPACE}" ]; then
  log-err "You must set NAMESPACE in you environment!
  example:
          export NAMESPACE=foobar"
  exit 1
fi

deploy() {
  log-info "nodeshift --knative=true --namespace.name=${NAMESPACE}"
  nodeshift --knative=true --namespace.name=${NAMESPACE}
}

undeploy() {
    dd-oc delete service.serving.knative.dev/${APP_NAME}
}

# execute
case $1 in
  deploy)
    deploy
  ;;
  undeploy)
    undeploy
  ;;
  *)
    echo ${USAGE}
  ;;
esac
