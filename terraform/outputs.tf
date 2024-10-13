output "dns_zone_name" {
  value = azurerm_dns_zone.main.name
}

output "acr_login_server" {
  value = azurerm_container_registry.main.login_server
}
