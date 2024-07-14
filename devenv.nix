{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.nodejs_22
    pkgs.pnpm
  ];

  # https://devenv.sh/scripts/
  scripts.hello.exec = "echo hello from $GREET";

  enterShell = ''
    hello
    git --version
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running 0 tests"
  '';

  # TODO: These dotenv lines can be removed.
  dotenv.enable = true;
  dotenv.filename = [ ".env" ".env.local" ];

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/languages/
  # languages.nix.enable = true;

  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks = {
    chan-ko-testing = {
      enable = true;
      name = "Chan-Ko Website Testing";
      entry = "pnpm test:chan-ko-website";
      pass_filenames = false;
    };

    end-of-file-fixer.enable = true;

    gts = {
      enable = true;
      name = "Google TypeScript Style Guide Enforcement";
      entry = "pnpm run lint:fix";
      pass_filenames = false;
    };

    trim-trailing-whitespace.enable = true;
  };

  # https://devenv.sh/processes/
  # processes.ping.exec = "ping example.com";

  # See full reference at https://devenv.sh/reference/options/
}
