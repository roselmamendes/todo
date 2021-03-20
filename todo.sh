parametro=$1

case $parametro in

  build-image)
    docker build -t todo .
    ;;

  start)
    docker run --rm -p 3000:3000 -v ${PWD}:/usr/src/app -it todo npm start
    ;;

  test)
    docker run --rm -v ${PWD}:/usr/src/app -it todo npm test $2
    ;;

  *)
    echo "Comandos:"
    echo "build-image|start|test"
    ;;
esac