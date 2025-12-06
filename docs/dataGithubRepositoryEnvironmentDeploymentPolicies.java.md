# `dataGithubRepositoryEnvironmentDeploymentPolicies` Submodule <a name="`dataGithubRepositoryEnvironmentDeploymentPolicies` Submodule" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryEnvironmentDeploymentPolicies <a name="DataGithubRepositoryEnvironmentDeploymentPolicies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies github_repository_environment_deployment_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPolicies;

DataGithubRepositoryEnvironmentDeploymentPolicies.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environment(java.lang.String)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The name of the GitHub repository. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#environment DataGithubRepositoryEnvironmentDeploymentPolicies#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The name of the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#repository DataGithubRepositoryEnvironmentDeploymentPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPolicies;

DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPolicies;

DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPolicies;

DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPolicies;

DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGithubRepositoryEnvironmentDeploymentPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGithubRepositoryEnvironmentDeploymentPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryEnvironmentDeploymentPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList">DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.policies"></a>

```java
public DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList">DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryEnvironmentDeploymentPoliciesConfig <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesConfig" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig;

DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environment(java.lang.String)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The name of the GitHub repository. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#environment DataGithubRepositoryEnvironmentDeploymentPolicies#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The name of the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#repository DataGithubRepositoryEnvironmentDeploymentPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies;

DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList;

new DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get"></a>

```java
public DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_environment_deployment_policies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference;

new DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies">DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.internalValue"></a>

```java
public DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies">DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies</a>

---



