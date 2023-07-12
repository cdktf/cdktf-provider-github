# `github_repository_collaborator`

Refer to the Terraform Registory for docs: [`github_repository_collaborator`](https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator).

# `repositoryCollaborator` Submodule <a name="`repositoryCollaborator` Submodule" id="@cdktf/provider-github.repositoryCollaborator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryCollaborator <a name="RepositoryCollaborator" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator github_repository_collaborator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_collaborator.RepositoryCollaborator;

RepositoryCollaborator.Builder.create(Construct scope, java.lang.String id)
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
    .repository(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .permission(java.lang.String)
//  .permissionDiffSuppression(java.lang.Boolean)
//  .permissionDiffSuppression(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The user to add to the repository as a collaborator. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#id RepositoryCollaborator#id}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.permission">permission</a></code> | <code>java.lang.String</code> | The permission of the outside collaborator for the repository. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.permissionDiffSuppression">permissionDiffSuppression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Suppress plan diffs for triage and maintain. Defaults to 'false'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#repository RepositoryCollaborator#repository}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The user to add to the repository as a collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#username RepositoryCollaborator#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#id RepositoryCollaborator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.permission"></a>

- *Type:* java.lang.String

The permission of the outside collaborator for the repository.

Must be one of 'pull', 'push', 'maintain', 'triage' or 'admin' or the name of an existing custom repository role within the organization for organization-owned repositories. Must be 'push' for personal repositories. Defaults to 'push'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#permission RepositoryCollaborator#permission}

---

##### `permissionDiffSuppression`<sup>Optional</sup> <a name="permissionDiffSuppression" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.Initializer.parameter.permissionDiffSuppression"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Suppress plan diffs for triage and maintain. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#permission_diff_suppression RepositoryCollaborator#permission_diff_suppression}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.resetPermission">resetPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.resetPermissionDiffSuppression">resetPermissionDiffSuppression</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.resetId"></a>

```java
public void resetId()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.resetPermission"></a>

```java
public void resetPermission()
```

##### `resetPermissionDiffSuppression` <a name="resetPermissionDiffSuppression" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.resetPermissionDiffSuppression"></a>

```java
public void resetPermissionDiffSuppression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_collaborator.RepositoryCollaborator;

RepositoryCollaborator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_collaborator.RepositoryCollaborator;

RepositoryCollaborator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_collaborator.RepositoryCollaborator;

RepositoryCollaborator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.invitationId">invitationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.permissionDiffSuppressionInput">permissionDiffSuppressionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.permissionDiffSuppression">permissionDiffSuppression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `invitationId`<sup>Required</sup> <a name="invitationId" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.invitationId"></a>

```java
public java.lang.String getInvitationId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `permissionDiffSuppressionInput`<sup>Optional</sup> <a name="permissionDiffSuppressionInput" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.permissionDiffSuppressionInput"></a>

```java
public java.lang.Object getPermissionDiffSuppressionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `permissionDiffSuppression`<sup>Required</sup> <a name="permissionDiffSuppression" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.permissionDiffSuppression"></a>

```java
public java.lang.Object getPermissionDiffSuppression();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaborator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryCollaboratorConfig <a name="RepositoryCollaboratorConfig" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_collaborator.RepositoryCollaboratorConfig;

RepositoryCollaboratorConfig.builder()
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
    .repository(java.lang.String)
    .username(java.lang.String)
//  .id(java.lang.String)
//  .permission(java.lang.String)
//  .permissionDiffSuppression(java.lang.Boolean)
//  .permissionDiffSuppression(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.username">username</a></code> | <code>java.lang.String</code> | The user to add to the repository as a collaborator. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#id RepositoryCollaborator#id}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.permission">permission</a></code> | <code>java.lang.String</code> | The permission of the outside collaborator for the repository. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.permissionDiffSuppression">permissionDiffSuppression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Suppress plan diffs for triage and maintain. Defaults to 'false'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#repository RepositoryCollaborator#repository}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The user to add to the repository as a collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#username RepositoryCollaborator#username}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#id RepositoryCollaborator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

The permission of the outside collaborator for the repository.

Must be one of 'pull', 'push', 'maintain', 'triage' or 'admin' or the name of an existing custom repository role within the organization for organization-owned repositories. Must be 'push' for personal repositories. Defaults to 'push'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#permission RepositoryCollaborator#permission}

---

##### `permissionDiffSuppression`<sup>Optional</sup> <a name="permissionDiffSuppression" id="@cdktf/provider-github.repositoryCollaborator.RepositoryCollaboratorConfig.property.permissionDiffSuppression"></a>

```java
public java.lang.Object getPermissionDiffSuppression();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Suppress plan diffs for triage and maintain. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/resources/repository_collaborator#permission_diff_suppression RepositoryCollaborator#permission_diff_suppression}

---



