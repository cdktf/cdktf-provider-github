# `enterpriseOrganization` Submodule <a name="`enterpriseOrganization` Submodule" id="@cdktf/provider-github.enterpriseOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseOrganization <a name="EnterpriseOrganization" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization github_enterprise_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_organization.EnterpriseOrganization;

EnterpriseOrganization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .adminLogins(java.util.List<java.lang.String>)
    .billingEmail(java.lang.String)
    .enterpriseId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.adminLogins">adminLogins</a></code> | <code>java.util.List<java.lang.String></code> | List of organization owner usernames. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.billingEmail">billingEmail</a></code> | <code>java.lang.String</code> | The billing email address. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.enterpriseId">enterpriseId</a></code> | <code>java.lang.String</code> | The ID of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminLogins`<sup>Required</sup> <a name="adminLogins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.adminLogins"></a>

- *Type:* java.util.List<java.lang.String>

List of organization owner usernames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}

---

##### `billingEmail`<sup>Required</sup> <a name="billingEmail" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.billingEmail"></a>

- *Type:* java.lang.String

The billing email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#billing_email EnterpriseOrganization#billing_email}

---

##### `enterpriseId`<sup>Required</sup> <a name="enterpriseId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.enterpriseId"></a>

- *Type:* java.lang.String

The ID of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#name EnterpriseOrganization#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#description EnterpriseOrganization#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#display_name EnterpriseOrganization#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_organization.EnterpriseOrganization;

EnterpriseOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_organization.EnterpriseOrganization;

EnterpriseOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_organization.EnterpriseOrganization;

EnterpriseOrganization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_organization.EnterpriseOrganization;

EnterpriseOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EnterpriseOrganization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EnterpriseOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EnterpriseOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EnterpriseOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLoginsInput">adminLoginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmailInput">billingEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseIdInput">enterpriseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLogins">adminLogins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmail">billingEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseId">enterpriseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminLoginsInput`<sup>Optional</sup> <a name="adminLoginsInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLoginsInput"></a>

```java
public java.util.List<java.lang.String> getAdminLoginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `billingEmailInput`<sup>Optional</sup> <a name="billingEmailInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmailInput"></a>

```java
public java.lang.String getBillingEmailInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enterpriseIdInput`<sup>Optional</sup> <a name="enterpriseIdInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseIdInput"></a>

```java
public java.lang.String getEnterpriseIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `adminLogins`<sup>Required</sup> <a name="adminLogins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLogins"></a>

```java
public java.util.List<java.lang.String> getAdminLogins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `billingEmail`<sup>Required</sup> <a name="billingEmail" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmail"></a>

```java
public java.lang.String getBillingEmail();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enterpriseId`<sup>Required</sup> <a name="enterpriseId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseId"></a>

```java
public java.lang.String getEnterpriseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseOrganizationConfig <a name="EnterpriseOrganizationConfig" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.enterprise_organization.EnterpriseOrganizationConfig;

EnterpriseOrganizationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .adminLogins(java.util.List<java.lang.String>)
    .billingEmail(java.lang.String)
    .enterpriseId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.adminLogins">adminLogins</a></code> | <code>java.util.List<java.lang.String></code> | List of organization owner usernames. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.billingEmail">billingEmail</a></code> | <code>java.lang.String</code> | The billing email address. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.enterpriseId">enterpriseId</a></code> | <code>java.lang.String</code> | The ID of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminLogins`<sup>Required</sup> <a name="adminLogins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.adminLogins"></a>

```java
public java.util.List<java.lang.String> getAdminLogins();
```

- *Type:* java.util.List<java.lang.String>

List of organization owner usernames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}

---

##### `billingEmail`<sup>Required</sup> <a name="billingEmail" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.billingEmail"></a>

```java
public java.lang.String getBillingEmail();
```

- *Type:* java.lang.String

The billing email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#billing_email EnterpriseOrganization#billing_email}

---

##### `enterpriseId`<sup>Required</sup> <a name="enterpriseId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.enterpriseId"></a>

```java
public java.lang.String getEnterpriseId();
```

- *Type:* java.lang.String

The ID of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#name EnterpriseOrganization#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#description EnterpriseOrganization#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#display_name EnterpriseOrganization#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/enterprise_organization#id EnterpriseOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



