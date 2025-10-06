# `dataGithubRepositoryDeploymentBranchPolicies` Submodule <a name="`dataGithubRepositoryDeploymentBranchPolicies` Submodule" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryDeploymentBranchPolicies <a name="DataGithubRepositoryDeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies github_repository_deployment_branch_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPolicies;

DataGithubRepositoryDeploymentBranchPolicies.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environmentName(java.lang.String)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.environmentName">environmentName</a></code> | <code>java.lang.String</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.environmentName"></a>

- *Type:* java.lang.String

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#environment_name DataGithubRepositoryDeploymentBranchPolicies#environment_name}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#repository DataGithubRepositoryDeploymentBranchPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryDeploymentBranchPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPolicies;

DataGithubRepositoryDeploymentBranchPolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPolicies;

DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPolicies;

DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPolicies;

DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGithubRepositoryDeploymentBranchPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGithubRepositoryDeploymentBranchPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGithubRepositoryDeploymentBranchPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryDeploymentBranchPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.deploymentBranchPolicies">deploymentBranchPolicies</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentNameInput">environmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentName">environmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `deploymentBranchPolicies`<sup>Required</sup> <a name="deploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.deploymentBranchPolicies"></a>

```java
public DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList getDeploymentBranchPolicies();
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList</a>

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentNameInput"></a>

```java
public java.lang.String getEnvironmentNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentName"></a>

```java
public java.lang.String getEnvironmentName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryDeploymentBranchPoliciesConfig <a name="DataGithubRepositoryDeploymentBranchPoliciesConfig" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPoliciesConfig;

DataGithubRepositoryDeploymentBranchPoliciesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environmentName(java.lang.String)
    .repository(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.environmentName">environmentName</a></code> | <code>java.lang.String</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.environmentName"></a>

```java
public java.lang.String getEnvironmentName();
```

- *Type:* java.lang.String

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#environment_name DataGithubRepositoryDeploymentBranchPolicies#environment_name}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#repository DataGithubRepositoryDeploymentBranchPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies;

DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList;

new DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get"></a>

```java
public DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.data_github_repository_deployment_branch_policies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference;

new DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.internalValue"></a>

```java
public DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies</a>

---



