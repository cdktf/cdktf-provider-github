# `dataGithubOrganizationCustomProperties` Submodule <a name="`dataGithubOrganizationCustomProperties` Submodule" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationCustomProperties <a name="DataGithubOrganizationCustomProperties" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties github_organization_custom_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_organization_custom_properties.DataGithubOrganizationCustomProperties;

DataGithubOrganizationCustomProperties.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .propertyName(java.lang.String)
//  .allowedValues(java.util.List<java.lang.String>)
//  .defaultValue(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .valueType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.propertyName">propertyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.propertyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}.

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.allowedValues"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.defaultValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.required"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}.

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetAllowedValues"></a>

```java
public void resetAllowedValues()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetId"></a>

```java
public void resetId()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetValueType"></a>

```java
public void resetValueType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_organization_custom_properties.DataGithubOrganizationCustomProperties;

DataGithubOrganizationCustomProperties.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_organization_custom_properties.DataGithubOrganizationCustomProperties;

DataGithubOrganizationCustomProperties.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_organization_custom_properties.DataGithubOrganizationCustomProperties;

DataGithubOrganizationCustomProperties.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_organization_custom_properties.DataGithubOrganizationCustomProperties;

DataGithubOrganizationCustomProperties.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGithubOrganizationCustomProperties.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGithubOrganizationCustomProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGithubOrganizationCustomProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationCustomProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValuesInput">allowedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyNameInput">propertyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyName">propertyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValuesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `propertyNameInput`<sup>Optional</sup> <a name="propertyNameInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyNameInput"></a>

```java
public java.lang.String getPropertyNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyName"></a>

```java
public java.lang.String getPropertyName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationCustomPropertiesConfig <a name="DataGithubOrganizationCustomPropertiesConfig" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_organization_custom_properties.DataGithubOrganizationCustomPropertiesConfig;

DataGithubOrganizationCustomPropertiesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .propertyName(java.lang.String)
//  .allowedValues(java.util.List<java.lang.String>)
//  .defaultValue(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.propertyName">propertyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.propertyName"></a>

```java
public java.lang.String getPropertyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}.

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}.

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.2/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}.

---



