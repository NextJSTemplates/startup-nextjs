provider "azurerm" {
  features {}
  use_cli                         = true
  resource_provider_registrations = "none"
  subscription_id                 = "7070f8b7-bd63-4f32-8d9e-893679558af7"
}

variable "docker_image" {
  description = "DockerHub image flyingcodeman/devops-assignment2"
  default     = "flyingcodeman/devops-assignment2:latest"
}

# Resource Group
resource "azurerm_resource_group" "web_grp" {
  name     = "DevOpsWebAppGrp"
  location = "germanywestcentral"
}

# App Service Plan
resource "azurerm_service_plan" "web_srv_plan" {
  name                = "DevOpsWebAppPlan"
  location            = "germanywestcentral"
  resource_group_name = azurerm_resource_group.web_grp.name
  os_type             = "Linux"
  sku_name            = "F1"
}

# App Linux Instance with Docker Configuration
resource "azurerm_linux_web_app" "web_app" {
  name                = "DevOpsWebApp1245780"
  location            = azurerm_resource_group.web_grp.location
  resource_group_name = azurerm_resource_group.web_grp.name
  service_plan_id     = azurerm_service_plan.web_srv_plan.id

  site_config {
    always_on = false
  }
  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"          # Set for stateless container apps
    DOCKER_CUSTOM_IMAGE_NAME            = var.docker_image # Set Docker image from DockerHub
    WEBSITES_PORT                       = "3000"           # Port your app listens on
  }
}

# Create a DNS Zone
resource "azurerm_dns_zone" "dns_zone" {
  name                = "devopswebappdnszone.com"
  resource_group_name = azurerm_resource_group.web_grp.name
}

# CNAME Record for the Web App
resource "azurerm_dns_cname_record" "web_app_cname_record" {
  name                = "www"
  zone_name           = azurerm_dns_zone.dns_zone.name
  resource_group_name = azurerm_resource_group.web_grp.name
  ttl                 = 300
  record              = azurerm_linux_web_app.web_app.default_hostname
}

