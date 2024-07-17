{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.PROJECT_NAME = "Chan-Ko Website";

  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.nodejs_22
    pkgs.pnpm
  ];

  # https://devenv.sh/scripts/
  scripts.hello-chan-ko.exec = "echo hello from $PROJECT_NAME";

  enterShell = ''
    hello-chan-ko
    git --version
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
  '';

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/languages/
  # languages.nix.enable = true;

  # https://devenv.sh/pre-commit-hooks/
  # pre-commit.hooks.shellcheck.enable = true;

  # https://devenv.sh/processes/
  # processes.ping.exec = "ping example.com";

  # See full reference at https://devenv.sh/reference/options/
}
