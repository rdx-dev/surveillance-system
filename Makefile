.PHONY: help install-shell install-auth start-shell start-auth

help:
	@echo "Surveillance System - Milestone 1 Commands"
	@echo ""
	@echo "  make install-shell   - Install shell-app dependencies"
	@echo "  make install-auth    - Install auth-mfe dependencies"
	@echo "  make start-shell     - Start shell-app (port 3000)"
	@echo "  make start-auth      - Start auth-mfe (port 3001)"
	@echo ""
	@echo "Run shell-app and auth-mfe in separate terminals"

install-shell:
	cd frontend/shell-app && npm install

install-auth:
	cd frontend/auth-mfe && npm install

start-shell:
	cd frontend/shell-app && npm start

start-auth:
	cd frontend/auth-mfe && npm start
