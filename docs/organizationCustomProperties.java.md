# `organizationCustomProperties` Submodule <a name="`organizationCustomProperties` Submodule" id="@cdktf/provider-github.organizationCustomProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationCustomProperties <a name="OrganizationCustomProperties" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties github_organization_custom_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_custom_properties.OrganizationCustomProperties;

OrganizationCustomProperties.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.propertyName">propertyName</a></code> | <code>java.lang.String</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | The allowed values of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | The default value of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the custom property is required. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | The type of the custom property. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.propertyName"></a>

- *Type:* java.lang.String

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#property_name OrganizationCustomProperties#property_name}

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.allowedValues"></a>

- *Type:* java.util.List<java.lang.String>

The allowed values of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#allowed_values OrganizationCustomProperties#allowed_values}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.defaultValue"></a>

- *Type:* java.lang.String

The default value of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#default_value OrganizationCustomProperties#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#description OrganizationCustomProperties#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.required"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the custom property is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#required OrganizationCustomProperties#required}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

The type of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#value_type OrganizationCustomProperties#value_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetAllowedValues"></a>

```java
public void resetAllowedValues()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetId"></a>

```java
public void resetId()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.resetValueType"></a>

```java
public void resetValueType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationCustomProperties resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_custom_properties.OrganizationCustomProperties;

OrganizationCustomProperties.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_custom_properties.OrganizationCustomProperties;

OrganizationCustomProperties.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_custom_properties.OrganizationCustomProperties;

OrganizationCustomProperties.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_custom_properties.OrganizationCustomProperties;

OrganizationCustomProperties.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrganizationCustomProperties.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OrganizationCustomProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrganizationCustomProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrganizationCustomProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationCustomProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValuesInput">allowedValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyNameInput">propertyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyName">propertyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValuesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `propertyNameInput`<sup>Optional</sup> <a name="propertyNameInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyNameInput"></a>

```java
public java.lang.String getPropertyNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.propertyName"></a>

```java
public java.lang.String getPropertyName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomProperties.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationCustomPropertiesConfig <a name="OrganizationCustomPropertiesConfig" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.organization_custom_properties.OrganizationCustomPropertiesConfig;

OrganizationCustomPropertiesConfig.builder()
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
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.propertyName">propertyName</a></code> | <code>java.lang.String</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.allowedValues">allowedValues</a></code> | <code>java.util.List<java.lang.String></code> | The allowed values of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | The default value of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the custom property. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.required">required</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the custom property is required. |
| <code><a href="#@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The type of the custom property. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.propertyName"></a>

```java
public java.lang.String getPropertyName();
```

- *Type:* java.lang.String

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#property_name OrganizationCustomProperties#property_name}

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.allowedValues"></a>

```java
public java.util.List<java.lang.String> getAllowedValues();
```

- *Type:* java.util.List<java.lang.String>

The allowed values of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#allowed_values OrganizationCustomProperties#allowed_values}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

The default value of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#default_value OrganizationCustomProperties#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#description OrganizationCustomProperties#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#id OrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the custom property is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#required OrganizationCustomProperties#required}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-github.organizationCustomProperties.OrganizationCustomPropertiesConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The type of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/organization_custom_properties#value_type OrganizationCustomProperties#value_type}

---



