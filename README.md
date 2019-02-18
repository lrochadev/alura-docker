## Projeto do curso de Docker

Para rodar a aplicação baster ter o docker e o docker-compose instalados.

docker-compose build<br/>
docker-compose up 

Para parar e remover os serviços: docker-compose down<br/>

### Obs:<br/>
No compose foram criados 5 containers:<br/>
1 container com a imagem do nginx e load balance configurado;<br/>
3 containers com a imagem do node;<br/>
1 container com a imagem do mongodb;
