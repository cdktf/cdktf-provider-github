# `github_repository_environment_deployment_policy`

Refer to the Terraform Registory for docs: [`github_repository_environment_deployment_policy`](https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy).

# `repositoryEnvironmentDeploymentPolicy` Submodule <a name="`repositoryEnvironmentDeploymentPolicy` Submodule" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryEnvironmentDeploymentPolicy <a name="RepositoryEnvironmentDeploymentPolicy" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy github_repository_environment_deployment_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment_deployment_policy.RepositoryEnvironmentDeploymentPolicy;

RepositoryEnvironmentDeploymentPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .branchPattern(java.lang.String)
    .environment(java.lang.String)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.branchPattern">branchPattern</a></code> | <code>java.lang.String</code> | The name pattern that branches must match in order to deploy to the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The name of the repository. The name is not case sensitive. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#id RepositoryEnvironmentDeploymentPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branchPattern`<sup>Required</sup> <a name="branchPattern" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.branchPattern"></a>

- *Type:* java.lang.String

The name pattern that branches must match in order to deploy to the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#branch_pattern RepositoryEnvironmentDeploymentPolicy#branch_pattern}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#environment RepositoryEnvironmentDeploymentPolicy#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The name of the repository. The name is not case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#repository RepositoryEnvironmentDeploymentPolicy#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#id RepositoryEnvironmentDeploymentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment_deployment_policy.RepositoryEnvironmentDeploymentPolicy;

RepositoryEnvironmentDeploymentPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment_deployment_policy.RepositoryEnvironmentDeploymentPolicy;

RepositoryEnvironmentDeploymentPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment_deployment_policy.RepositoryEnvironmentDeploymentPolicy;

RepositoryEnvironmentDeploymentPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.branchPatternInput">branchPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.branchPattern">branchPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branchPatternInput`<sup>Optional</sup> <a name="branchPatternInput" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.branchPatternInput"></a>

```java
public java.lang.String getBranchPatternInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `branchPattern`<sup>Required</sup> <a name="branchPattern" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.branchPattern"></a>

```java
public java.lang.String getBranchPattern();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryEnvironmentDeploymentPolicyConfig <a name="RepositoryEnvironmentDeploymentPolicyConfig" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment_deployment_policy.RepositoryEnvironmentDeploymentPolicyConfig;

RepositoryEnvironmentDeploymentPolicyConfig.builder()
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
    .branchPattern(java.lang.String)
    .environment(java.lang.String)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.branchPattern">branchPattern</a></code> | <code>java.lang.String</code> | The name pattern that branches must match in order to deploy to the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The name of the repository. The name is not case sensitive. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#id RepositoryEnvironmentDeploymentPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branchPattern`<sup>Required</sup> <a name="branchPattern" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.branchPattern"></a>

```java
public java.lang.String getBranchPattern();
```

- *Type:* java.lang.String

The name pattern that branches must match in order to deploy to the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#branch_pattern RepositoryEnvironmentDeploymentPolicy#branch_pattern}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#environment RepositoryEnvironmentDeploymentPolicy#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The name of the repository. The name is not case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#repository RepositoryEnvironmentDeploymentPolicy#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironmentDeploymentPolicy.RepositoryEnvironmentDeploymentPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/resources/repository_environment_deployment_policy#id RepositoryEnvironmentDeploymentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



