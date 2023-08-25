# `github_repository_deployment_branch_policy`

Refer to the Terraform Registory for docs: [`github_repository_deployment_branch_policy`](https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy).

# `repositoryDeploymentBranchPolicy` Submodule <a name="`repositoryDeploymentBranchPolicy` Submodule" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryDeploymentBranchPolicy <a name="RepositoryDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_deployment_branch_policy.RepositoryDeploymentBranchPolicy;

RepositoryDeploymentBranchPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .environmentName(java.lang.String)
    .name(java.lang.String)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.environmentName">environmentName</a></code> | <code>java.lang.String</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the branch. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.environmentName"></a>

- *Type:* java.lang.String

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#environment_name RepositoryDeploymentBranchPolicy#environment_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#name RepositoryDeploymentBranchPolicy#name}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#repository RepositoryDeploymentBranchPolicy#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_deployment_branch_policy.RepositoryDeploymentBranchPolicy;

RepositoryDeploymentBranchPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_deployment_branch_policy.RepositoryDeploymentBranchPolicy;

RepositoryDeploymentBranchPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_deployment_branch_policy.RepositoryDeploymentBranchPolicy;

RepositoryDeploymentBranchPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentNameInput">environmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentName">environmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentNameInput"></a>

```java
public java.lang.String getEnvironmentNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentName"></a>

```java
public java.lang.String getEnvironmentName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryDeploymentBranchPolicyConfig <a name="RepositoryDeploymentBranchPolicyConfig" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_deployment_branch_policy.RepositoryDeploymentBranchPolicyConfig;

RepositoryDeploymentBranchPolicyConfig.builder()
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
    .environmentName(java.lang.String)
    .name(java.lang.String)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.environmentName">environmentName</a></code> | <code>java.lang.String</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the branch. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.environmentName"></a>

```java
public java.lang.String getEnvironmentName();
```

- *Type:* java.lang.String

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#environment_name RepositoryDeploymentBranchPolicy#environment_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#name RepositoryDeploymentBranchPolicy#name}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#repository RepositoryDeploymentBranchPolicy#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



