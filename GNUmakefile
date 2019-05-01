TOP_DIR := $(patsubst %/,%,$(dir $(realpath $(lastword $(MAKEFILE_LIST)))))
CONDA_ENV_DIR := $(TOP_DIR)/conda-env

CONDA := $(HOME)/miniconda3/bin/conda
CONDA_BIN_DIR := $(CONDA_ENV_DIR)/bin

.PHONY: conda-env
conda-env:
	if [ ! -d $(CONDA_ENV_DIR) ]; then \
		$(CONDA) env create -f environment.yml -p $(CONDA_ENV_DIR); \
	else \
		$(CONDA) env update -f environment.yml -p $(CONDA_ENV_DIR); \
	fi
	$(CONDA_BIN_DIR)/npm install


NODE_MODULES_BIN_DIR := $(TOP_DIR)/node_modules/.bin

-include local.mk

export PATH := $(NODE_MODULES_BIN_DIR):$(CONDA_BIN_DIR):$(PATH)
PREFERRED_INTERACTIVE_SHELL ?= bash
.PHONY: shell
shell:
	@PS1='🐢 # ' $(PREFERRED_INTERACTIVE_SHELL)
