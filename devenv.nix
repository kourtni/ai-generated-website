{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "AI Generated Website Repo";

  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.nodejs_22
    pkgs.pnpm
  ];

  # https://devenv.sh/scripts/
  scripts.hello.exec = ''echo -e "\033[0;32m### Welcome to the $GREET! ###\033[0m"'';

  enterShell = ''
    hello
  '';

  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks = {
    chan-ko-testing = {
      enable = true;
      name = "Chan-Ko Website Testing";
      entry = "pnpm test:chan-ko-website";
      pass_filenames = false;
      verbose = true;
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

  # Additional devenv options:

  # https://devenv.sh/tests/

  # https://devenv.sh/services/

  # https://devenv.sh/languages/

  # https://devenv.sh/processes/

  # See full reference at https://devenv.sh/reference/options/
}
