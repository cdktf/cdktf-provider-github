# `repositoryPullRequest` Submodule <a name="`repositoryPullRequest` Submodule" id="@cdktf/provider-github.repositoryPullRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPullRequest <a name="RepositoryPullRequest" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request github_repository_pull_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_pull_request.RepositoryPullRequest;

RepositoryPullRequest.Builder.create(Construct scope, java.lang.String id)
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
    .baseRef(java.lang.String)
    .baseRepository(java.lang.String)
    .headRef(java.lang.String)
    .title(java.lang.String)
//  .body(java.lang.String)
//  .id(java.lang.String)
//  .maintainerCanModify(java.lang.Boolean)
//  .maintainerCanModify(IResolvable)
//  .owner(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.baseRef">baseRef</a></code> | <code>java.lang.String</code> | Name of the branch serving as the base of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.baseRepository">baseRepository</a></code> | <code>java.lang.String</code> | Name of the base repository to retrieve the Pull Requests from. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.headRef">headRef</a></code> | <code>java.lang.String</code> | Name of the branch serving as the head of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | The title of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Body of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#id RepositoryPullRequest#id}. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.maintainerCanModify">maintainerCanModify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Owner of the repository. If not provided, the provider's default owner is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.baseRef"></a>

- *Type:* java.lang.String

Name of the branch serving as the base of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#base_ref RepositoryPullRequest#base_ref}

---

##### `baseRepository`<sup>Required</sup> <a name="baseRepository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.baseRepository"></a>

- *Type:* java.lang.String

Name of the base repository to retrieve the Pull Requests from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#base_repository RepositoryPullRequest#base_repository}

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.headRef"></a>

- *Type:* java.lang.String

Name of the branch serving as the head of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#head_ref RepositoryPullRequest#head_ref}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.title"></a>

- *Type:* java.lang.String

The title of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#title RepositoryPullRequest#title}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Body of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#body RepositoryPullRequest#body}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#id RepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainerCanModify`<sup>Optional</sup> <a name="maintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.maintainerCanModify"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Owner of the repository. If not provided, the provider's default owner is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#owner RepositoryPullRequest#owner}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify">resetMaintainerCanModify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody"></a>

```java
public void resetBody()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId"></a>

```java
public void resetId()
```

##### `resetMaintainerCanModify` <a name="resetMaintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify"></a>

```java
public void resetMaintainerCanModify()
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner"></a>

```java
public void resetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryPullRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_pull_request.RepositoryPullRequest;

RepositoryPullRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_pull_request.RepositoryPullRequest;

RepositoryPullRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_pull_request.RepositoryPullRequest;

RepositoryPullRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_pull_request.RepositoryPullRequest;

RepositoryPullRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RepositoryPullRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RepositoryPullRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RepositoryPullRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RepositoryPullRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryPullRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha">baseSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft">draft</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha">headSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number">number</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt">openedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy">openedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput">baseRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput">baseRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput">headRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput">maintainerCanModifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef">baseRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository">baseRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef">headRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify">maintainerCanModify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseSha`<sup>Required</sup> <a name="baseSha" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha"></a>

```java
public java.lang.String getBaseSha();
```

- *Type:* java.lang.String

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft"></a>

```java
public IResolvable getDraft();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `headSha`<sup>Required</sup> <a name="headSha" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha"></a>

```java
public java.lang.String getHeadSha();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

---

##### `openedAt`<sup>Required</sup> <a name="openedAt" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt"></a>

```java
public java.lang.Number getOpenedAt();
```

- *Type:* java.lang.Number

---

##### `openedBy`<sup>Required</sup> <a name="openedBy" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy"></a>

```java
public java.lang.String getOpenedBy();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `baseRefInput`<sup>Optional</sup> <a name="baseRefInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput"></a>

```java
public java.lang.String getBaseRefInput();
```

- *Type:* java.lang.String

---

##### `baseRepositoryInput`<sup>Optional</sup> <a name="baseRepositoryInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput"></a>

```java
public java.lang.String getBaseRepositoryInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `headRefInput`<sup>Optional</sup> <a name="headRefInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput"></a>

```java
public java.lang.String getHeadRefInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintainerCanModifyInput`<sup>Optional</sup> <a name="maintainerCanModifyInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput"></a>

```java
public java.lang.Object getMaintainerCanModifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef"></a>

```java
public java.lang.String getBaseRef();
```

- *Type:* java.lang.String

---

##### `baseRepository`<sup>Required</sup> <a name="baseRepository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository"></a>

```java
public java.lang.String getBaseRepository();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef"></a>

```java
public java.lang.String getHeadRef();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintainerCanModify`<sup>Required</sup> <a name="maintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify"></a>

```java
public java.lang.Object getMaintainerCanModify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPullRequestConfig <a name="RepositoryPullRequestConfig" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_pull_request.RepositoryPullRequestConfig;

RepositoryPullRequestConfig.builder()
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
    .baseRef(java.lang.String)
    .baseRepository(java.lang.String)
    .headRef(java.lang.String)
    .title(java.lang.String)
//  .body(java.lang.String)
//  .id(java.lang.String)
//  .maintainerCanModify(java.lang.Boolean)
//  .maintainerCanModify(IResolvable)
//  .owner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef">baseRef</a></code> | <code>java.lang.String</code> | Name of the branch serving as the base of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository">baseRepository</a></code> | <code>java.lang.String</code> | Name of the base repository to retrieve the Pull Requests from. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef">headRef</a></code> | <code>java.lang.String</code> | Name of the branch serving as the head of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title">title</a></code> | <code>java.lang.String</code> | The title of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body">body</a></code> | <code>java.lang.String</code> | Body of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#id RepositoryPullRequest#id}. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify">maintainerCanModify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Owner of the repository. If not provided, the provider's default owner is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef"></a>

```java
public java.lang.String getBaseRef();
```

- *Type:* java.lang.String

Name of the branch serving as the base of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#base_ref RepositoryPullRequest#base_ref}

---

##### `baseRepository`<sup>Required</sup> <a name="baseRepository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository"></a>

```java
public java.lang.String getBaseRepository();
```

- *Type:* java.lang.String

Name of the base repository to retrieve the Pull Requests from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#base_repository RepositoryPullRequest#base_repository}

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef"></a>

```java
public java.lang.String getHeadRef();
```

- *Type:* java.lang.String

Name of the branch serving as the head of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#head_ref RepositoryPullRequest#head_ref}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#title RepositoryPullRequest#title}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Body of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#body RepositoryPullRequest#body}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#id RepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainerCanModify`<sup>Optional</sup> <a name="maintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify"></a>

```java
public java.lang.Object getMaintainerCanModify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Owner of the repository. If not provided, the provider's default owner is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_pull_request#owner RepositoryPullRequest#owner}

---



