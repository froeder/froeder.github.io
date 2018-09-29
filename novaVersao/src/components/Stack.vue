<template>
    <q-card>
        <q-card-main class="col-xs-12">
            <p class="header col-xs-12">Ferramentas</p>
            <div class="row">
                <i class="devicon-git-plain colored icone"><q-tooltip>GIT: Versionamento de código</q-tooltip></i>
                <i class="devicon-github-plain icone"><q-tooltip>GitHub: Repositório de projetos open-source</q-tooltip></i>
                <i class="devicon-bitbucket-plain colored icone"><q-tooltip>Bitbucket: Repositório para projetos <br> open-source e privados</q-tooltip></i>
                <i  class="devicon-trello-plain colored icone"><q-tooltip>Trello: Ferramenta para gestão de projetos <br> que usa o kanban como base.</q-tooltip></i>
                <i class="devicon-slack-plain colored icone"><q-tooltip>Slack: Ferramenta para comunicação.</q-tooltip></i>
            </div>
            <q-card-separator/>
                <div class="row" style="padding-bottom:1em">
                    <p class="header col-xs-12">Linguagens e Frameworks</p>
                    <i class="devicon-html5-plain colored icone"><q-tooltip>HTML 5: Linguagem de marcação de texto.</q-tooltip></i>
                    <i class="devicon-css3-plain colored icone"><q-tooltip>CSS: Estilização para páginas HTML</q-tooltip></i>
                    <i class="devicon-php-plain colored icone"><q-tooltip>PHP: Linguagem OO para a WEB.</q-tooltip></i>
                    <i class="devicon-javascript-plain colored icone"><q-tooltip>JavaScript: Linguagem de programação para WEB.</q-tooltip></i>
                    <i class="devicon-vuejs-plain colored icone"><q-tooltip>Vue.js: Linguagem de programação JavaScript para PWA.</q-tooltip></i>
                    <i class="devicon-nodejs-plain colored icone"><q-tooltip>Node.js: Interpretador de código JavaScript com o código aberto.</q-tooltip></i>
                    <i class="devicon-webpack-plain colored icone"><q-tooltip>Webpack: Bundler de módulo para JavaScript.</q-tooltip></i>
                    <i class="devicon-jquery-plain colored icone"><q-tooltip>jQuery: Biblioteca de funções JavaScript. </q-tooltip></i>
                    <i class="devicon-ionic-plain colored icone"><q-tooltip>Ionic: Linguagem de programação PWA híbrida.</q-tooltip></i>
                    <i class="devicon-wordpress-plain colored icone"><q-tooltip>WordPress: Ferramenta CSM para gerenciamento de conteúdos.</q-tooltip></i>
                    <i class="devicon-bootstrap-plain colored icone"><q-tooltip>Boostrap: Conjunto de classes CSS para HTML.</q-tooltip></i>        
                </div>
            <q-card-separator/>
                <div class="row" >
                    <p class="header col-xs-12">Banco de Dados</p>
                    <i class="devicon-mysql-plain colored icone"><q-tooltip>MySql: Banco de Dados para a WEB.</q-tooltip></i>
                    <i class="devicon-mongodb-plain colored icone"><q-tooltip>MongoDB: Banco de Dados não relacional.</q-tooltip></i>
                </div>
            <q-card-separator/>
                <div class="row" >
                    <p class="header col-xs-12">IDE's e Editores de Texto</p>
                    <i class="devicon-visualstudio-plain colored icone"><q-tooltip>Visual Studio Code: Editor de texto da Microsoft.</q-tooltip></i>
                    <i class="devicon-atom-original colored icone"><q-tooltip></q-tooltip></i>
                    <i class="devicon-phpstorm-plain colored icone"><q-tooltip></q-tooltip></i>
                </div>
            <q-card-separator/>
                <div class="row">
                    <p class="header col-xs-12">Sistemas Operacionais</p>
                    <i class="devicon-linux-plain colored icone"><q-tooltip></q-tooltip></i>
                    <i class="devicon-ubuntu-plain colored icone"><q-tooltip></q-tooltip></i>
                    <i class="devicon-debian-plain colored icone"><q-tooltip></q-tooltip></i>
                    <i class="devicon-android-plain colored icone"><q-tooltip></q-tooltip></i>
                    <i class="devicon-windows8-plain colored icone"><q-tooltip></q-tooltip></i>
                </div>

        </q-card-main>
    </q-card>
</template>

<style>
    .header{
        font-size:2em!important;
    }
    .icone{
        font-size:3em
    }
    .row{
        padding-bottom:1em ;
        padding-top: 1em
    }
</style>
