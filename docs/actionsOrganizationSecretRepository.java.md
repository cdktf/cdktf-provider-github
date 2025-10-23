# `actionsOrganizationSecretRepository` Submodule <a name="`actionsOrganizationSecretRepository` Submodule" id="@cdktf/provider-github.actionsOrganizationSecretRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationSecretRepository <a name="ActionsOrganizationSecretRepository" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository github_actions_organization_secret_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_organization_secret_repository.ActionsOrganizationSecretRepository;

ActionsOrganizationSecretRepository.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repositoryId(java.lang.Number)
    .secretName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.Number</code> | The repository ID that can access the organization secret. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the existing secret. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#id ActionsOrganizationSecretRepository#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.Number

The repository ID that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#repository_id ActionsOrganizationSecretRepository#repository_id}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.secretName"></a>

- *Type:* java.lang.String

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#secret_name ActionsOrganizationSecretRepository#secret_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#id ActionsOrganizationSecretRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsOrganizationSecretRepository resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_organization_secret_repository.ActionsOrganizationSecretRepository;

ActionsOrganizationSecretRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_organization_secret_repository.ActionsOrganizationSecretRepository;

ActionsOrganizationSecretRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_organization_secret_repository.ActionsOrganizationSecretRepository;

ActionsOrganizationSecretRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_organization_secret_repository.ActionsOrganizationSecretRepository;

ActionsOrganizationSecretRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ActionsOrganizationSecretRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ActionsOrganizationSecretRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ActionsOrganizationSecretRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ActionsOrganizationSecretRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationSecretRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.repositoryId">repositoryId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.repositoryIdInput"></a>

```java
public java.lang.Number getRepositoryIdInput();
```

- *Type:* java.lang.Number

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.repositoryId"></a>

```java
public java.lang.Number getRepositoryId();
```

- *Type:* java.lang.Number

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationSecretRepositoryConfig <a name="ActionsOrganizationSecretRepositoryConfig" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.actions_organization_secret_repository.ActionsOrganizationSecretRepositoryConfig;

ActionsOrganizationSecretRepositoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repositoryId(java.lang.Number)
    .secretName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.Number</code> | The repository ID that can access the organization secret. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the existing secret. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#id ActionsOrganizationSecretRepository#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.repositoryId"></a>

```java
public java.lang.Number getRepositoryId();
```

- *Type:* java.lang.Number

The repository ID that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#repository_id ActionsOrganizationSecretRepository#repository_id}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#secret_name ActionsOrganizationSecretRepository#secret_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsOrganizationSecretRepository.ActionsOrganizationSecretRepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/resources/actions_organization_secret_repository#id ActionsOrganizationSecretRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



