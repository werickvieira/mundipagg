start:
	@echo Iniciando a aplicação
	npm start

install:
	@echo Instalando dependências
	npm install

init:
	@echo Instalando dependências e executando aplicação
	npm install && npm start

.PHONY: start install init
