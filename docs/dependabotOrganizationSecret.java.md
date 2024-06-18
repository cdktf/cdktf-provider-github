# `dependabotOrganizationSecret` Submodule <a name="`dependabotOrganizationSecret` Submodule" id="@cdktf/provider-github.dependabotOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DependabotOrganizationSecret <a name="DependabotOrganizationSecret" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret github_dependabot_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.dependabot_organization_secret.DependabotOrganizationSecret;

DependabotOrganizationSecret.Builder.create(Construct scope, java.lang.String id)
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
    .secretName(java.lang.String)
    .visibility(java.lang.String)
//  .encryptedValue(java.lang.String)
//  .id(java.lang.String)
//  .plaintextValue(java.lang.String)
//  .selectedRepositoryIds(java.util.List<java.lang.Number>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | An array of repository ids that can access the organization secret. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.secretName"></a>

- *Type:* java.lang.String

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#secret_name DependabotOrganizationSecret#secret_name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#visibility DependabotOrganizationSecret#visibility}

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.encryptedValue"></a>

- *Type:* java.lang.String

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#encrypted_value DependabotOrganizationSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.plaintextValue"></a>

- *Type:* java.lang.String

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#plaintext_value DependabotOrganizationSecret#plaintext_value}

---

##### `selectedRepositoryIds`<sup>Optional</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.selectedRepositoryIds"></a>

- *Type:* java.util.List<java.lang.Number>

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#selected_repository_ids DependabotOrganizationSecret#selected_repository_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetEncryptedValue">resetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetPlaintextValue">resetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetSelectedRepositoryIds">resetSelectedRepositoryIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEncryptedValue` <a name="resetEncryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetEncryptedValue"></a>

```java
public void resetEncryptedValue()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetId"></a>

```java
public void resetId()
```

##### `resetPlaintextValue` <a name="resetPlaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetPlaintextValue"></a>

```java
public void resetPlaintextValue()
```

##### `resetSelectedRepositoryIds` <a name="resetSelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetSelectedRepositoryIds"></a>

```java
public void resetSelectedRepositoryIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DependabotOrganizationSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.dependabot_organization_secret.DependabotOrganizationSecret;

DependabotOrganizationSecret.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.dependabot_organization_secret.DependabotOrganizationSecret;

DependabotOrganizationSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.dependabot_organization_secret.DependabotOrganizationSecret;

DependabotOrganizationSecret.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.dependabot_organization_secret.DependabotOrganizationSecret;

DependabotOrganizationSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DependabotOrganizationSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DependabotOrganizationSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DependabotOrganizationSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DependabotOrganizationSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DependabotOrganizationSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValueInput">encryptedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValueInput">plaintextValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIdsInput">selectedRepositoryIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `encryptedValueInput`<sup>Optional</sup> <a name="encryptedValueInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValueInput"></a>

```java
public java.lang.String getEncryptedValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `plaintextValueInput`<sup>Optional</sup> <a name="plaintextValueInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValueInput"></a>

```java
public java.lang.String getPlaintextValueInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `selectedRepositoryIdsInput`<sup>Optional</sup> <a name="selectedRepositoryIdsInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `encryptedValue`<sup>Required</sup> <a name="encryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValue"></a>

```java
public java.lang.String getEncryptedValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `plaintextValue`<sup>Required</sup> <a name="plaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValue"></a>

```java
public java.lang.String getPlaintextValue();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DependabotOrganizationSecretConfig <a name="DependabotOrganizationSecretConfig" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.dependabot_organization_secret.DependabotOrganizationSecretConfig;

DependabotOrganizationSecretConfig.builder()
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
    .secretName(java.lang.String)
    .visibility(java.lang.String)
//  .encryptedValue(java.lang.String)
//  .id(java.lang.String)
//  .plaintextValue(java.lang.String)
//  .selectedRepositoryIds(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | An array of repository ids that can access the organization secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#secret_name DependabotOrganizationSecret#secret_name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#visibility DependabotOrganizationSecret#visibility}

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.encryptedValue"></a>

```java
public java.lang.String getEncryptedValue();
```

- *Type:* java.lang.String

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#encrypted_value DependabotOrganizationSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.plaintextValue"></a>

```java
public java.lang.String getPlaintextValue();
```

- *Type:* java.lang.String

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#plaintext_value DependabotOrganizationSecret#plaintext_value}

---

##### `selectedRepositoryIds`<sup>Optional</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIds();
```

- *Type:* java.util.List<java.lang.Number>

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/dependabot_organization_secret#selected_repository_ids DependabotOrganizationSecret#selected_repository_ids}

---



