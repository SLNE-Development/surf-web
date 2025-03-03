<?php

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class MakeAction extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:action {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates an action';

    protected function getStub()
    {
        return __DIR__ . '/stubs/action.stub';
    }

    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace . '\Actions';
    }

    protected function replaceClass($stub, $name)
    {
        return str_replace('{{ class }}', $this->argument("name"), parent::replaceClass($stub, $name));
    }

    protected function promptForMissingArgumentsUsing()
    {
        return [
            "name" => [
                "What should the Action be named?",
                "E.g. CreatePost"
            ]
        ];
    }
}
