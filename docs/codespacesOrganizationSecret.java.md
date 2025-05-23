# `codespacesOrganizationSecret` Submodule <a name="`codespacesOrganizationSecret` Submodule" id="@cdktf/provider-github.codespacesOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodespacesOrganizationSecret <a name="CodespacesOrganizationSecret" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret github_codespaces_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.codespaces_organization_secret.CodespacesOrganizationSecret;

CodespacesOrganizationSecret.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#id CodespacesOrganizationSecret#id}. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | An array of repository ids that can access the organization secret. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.secretName"></a>

- *Type:* java.lang.String

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#secret_name CodespacesOrganizationSecret#secret_name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#visibility CodespacesOrganizationSecret#visibility}

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.encryptedValue"></a>

- *Type:* java.lang.String

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#encrypted_value CodespacesOrganizationSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#id CodespacesOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.plaintextValue"></a>

- *Type:* java.lang.String

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#plaintext_value CodespacesOrganizationSecret#plaintext_value}

---

##### `selectedRepositoryIds`<sup>Optional</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.selectedRepositoryIds"></a>

- *Type:* java.util.List<java.lang.Number>

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#selected_repository_ids CodespacesOrganizationSecret#selected_repository_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetEncryptedValue">resetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetPlaintextValue">resetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetSelectedRepositoryIds">resetSelectedRepositoryIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEncryptedValue` <a name="resetEncryptedValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetEncryptedValue"></a>

```java
public void resetEncryptedValue()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetId"></a>

```java
public void resetId()
```

##### `resetPlaintextValue` <a name="resetPlaintextValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetPlaintextValue"></a>

```java
public void resetPlaintextValue()
```

##### `resetSelectedRepositoryIds` <a name="resetSelectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetSelectedRepositoryIds"></a>

```java
public void resetSelectedRepositoryIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodespacesOrganizationSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.codespaces_organization_secret.CodespacesOrganizationSecret;

CodespacesOrganizationSecret.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.codespaces_organization_secret.CodespacesOrganizationSecret;

CodespacesOrganizationSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.codespaces_organization_secret.CodespacesOrganizationSecret;

CodespacesOrganizationSecret.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.codespaces_organization_secret.CodespacesOrganizationSecret;

CodespacesOrganizationSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodespacesOrganizationSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CodespacesOrganizationSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodespacesOrganizationSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodespacesOrganizationSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CodespacesOrganizationSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.encryptedValueInput">encryptedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.plaintextValueInput">plaintextValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.selectedRepositoryIdsInput">selectedRepositoryIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `encryptedValueInput`<sup>Optional</sup> <a name="encryptedValueInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.encryptedValueInput"></a>

```java
public java.lang.String getEncryptedValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `plaintextValueInput`<sup>Optional</sup> <a name="plaintextValueInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.plaintextValueInput"></a>

```java
public java.lang.String getPlaintextValueInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `selectedRepositoryIdsInput`<sup>Optional</sup> <a name="selectedRepositoryIdsInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `encryptedValue`<sup>Required</sup> <a name="encryptedValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.encryptedValue"></a>

```java
public java.lang.String getEncryptedValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `plaintextValue`<sup>Required</sup> <a name="plaintextValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.plaintextValue"></a>

```java
public java.lang.String getPlaintextValue();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.selectedRepositoryIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodespacesOrganizationSecretConfig <a name="CodespacesOrganizationSecretConfig" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.codespaces_organization_secret.CodespacesOrganizationSecretConfig;

CodespacesOrganizationSecretConfig.builder()
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
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#id CodespacesOrganizationSecret#id}. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>java.util.List<java.lang.Number></code> | An array of repository ids that can access the organization secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#secret_name CodespacesOrganizationSecret#secret_name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#visibility CodespacesOrganizationSecret#visibility}

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.encryptedValue"></a>

```java
public java.lang.String getEncryptedValue();
```

- *Type:* java.lang.String

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#encrypted_value CodespacesOrganizationSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#id CodespacesOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.plaintextValue"></a>

```java
public java.lang.String getPlaintextValue();
```

- *Type:* java.lang.String

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#plaintext_value CodespacesOrganizationSecret#plaintext_value}

---

##### `selectedRepositoryIds`<sup>Optional</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```java
public java.util.List<java.lang.Number> getSelectedRepositoryIds();
```

- *Type:* java.util.List<java.lang.Number>

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/codespaces_organization_secret#selected_repository_ids CodespacesOrganizationSecret#selected_repository_ids}

---



