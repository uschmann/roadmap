var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir((mix) => {
    mix.sass('./style.scss', './web/style.css');
});
