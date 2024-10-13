provider "azurerm" {
  features {}
  use_cli = true
}

variable "resource_group_name" {
  default = "DevOpsRessourceGroup"
}

variable "location" {
  default = "eastus"
}

variable "acr_name" {
  default = "devops3containerregistry"
}

variable "app_service_name" {
  default = "DevOpsNextJSApp"
}

variable "app_service_plan" {
  default = "ASP-DevOpsRessourceGroup-88b2"
}

variable "docker_image" {
  description = "DockerHub image flyingcodeman/devops-assignment2"
  default = "flyingcodeman/devops-assignment2:latest"
}

variable "dns_zone_name" {
  default = "https://devopsnextjsapp-g3hwgyh7djh5hrf0.eastus-01.azurewebsites.net"
}

# Resource Group
resource "azurerm_resource_group" "main" {
  name     = var.resource_group_name
  location = var.location
}

# App Service Plan
resource "azurerm_app_service_plan" "main" {
  name                = var.app_service_plan
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku {
    tier = "Free"
    size = "F1"
  }
}

# App Service with DockerHub image
resource "azurerm_app_service" "main" {
  name                = var.app_service_name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  app_service_plan_id = azurerm_app_service_plan.main.id

  site_config {
    app_command_line = ""
    linux_fx_version = "DOCKER|${var.docker_image}"
  }

  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"
  }
}

# DNS Zone
resource "azurerm_dns_zone" "main" {
  name                = var.dns_zone_name
  resource_group_name = azurerm_resource_group.main.name
}

# DNS A Record for App Service
resource "azurerm_dns_a_record" "main" {
  name                = "www"
  zone_name           = azurerm_dns_zone.main.name
  resource_group_name = azurerm_resource_group.main.name
  ttl                 = 300
  records             = [azurerm_app_service.main.default_site_hostname]
}
