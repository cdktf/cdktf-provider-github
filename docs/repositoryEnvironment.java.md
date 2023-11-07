# `github_repository_environment`

Refer to the Terraform Registory for docs: [`github_repository_environment`](https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment).

# `repositoryEnvironment` Submodule <a name="`repositoryEnvironment` Submodule" id="@cdktf/provider-github.repositoryEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryEnvironment <a name="RepositoryEnvironment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment github_repository_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironment;

RepositoryEnvironment.Builder.create(Construct scope, java.lang.String id)
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
    .environment(java.lang.String)
    .repository(java.lang.String)
//  .deploymentBranchPolicy(RepositoryEnvironmentDeploymentBranchPolicy)
//  .id(java.lang.String)
//  .reviewers(IResolvable)
//  .reviewers(java.util.List<RepositoryEnvironmentReviewers>)
//  .waitTimer(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The repository of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.deploymentBranchPolicy">deploymentBranchPolicy</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | deployment_branch_policy block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#id RepositoryEnvironment#id}. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.reviewers">reviewers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>></code> | reviewers block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.waitTimer">waitTimer</a></code> | <code>java.lang.Number</code> | Amount of time to delay a job after the job is initially triggered. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#environment RepositoryEnvironment#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The repository of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#repository RepositoryEnvironment#repository}

---

##### `deploymentBranchPolicy`<sup>Optional</sup> <a name="deploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.deploymentBranchPolicy"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

deployment_branch_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#id RepositoryEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.reviewers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>>

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#reviewers RepositoryEnvironment#reviewers}

---

##### `waitTimer`<sup>Optional</sup> <a name="waitTimer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.waitTimer"></a>

- *Type:* java.lang.Number

Amount of time to delay a job after the job is initially triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#wait_timer RepositoryEnvironment#wait_timer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy">putDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers">putReviewers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetDeploymentBranchPolicy">resetDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetReviewers">resetReviewers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetWaitTimer">resetWaitTimer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDeploymentBranchPolicy` <a name="putDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy"></a>

```java
public void putDeploymentBranchPolicy(RepositoryEnvironmentDeploymentBranchPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---

##### `putReviewers` <a name="putReviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers"></a>

```java
public void putReviewers(IResolvable OR java.util.List<RepositoryEnvironmentReviewers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>>

---

##### `resetDeploymentBranchPolicy` <a name="resetDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetDeploymentBranchPolicy"></a>

```java
public void resetDeploymentBranchPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetReviewers` <a name="resetReviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetReviewers"></a>

```java
public void resetReviewers()
```

##### `resetWaitTimer` <a name="resetWaitTimer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetWaitTimer"></a>

```java
public void resetWaitTimer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironment;

RepositoryEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironment;

RepositoryEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironment;

RepositoryEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironment;

RepositoryEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RepositoryEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RepositoryEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RepositoryEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicy">deploymentBranchPolicy</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference">RepositoryEnvironmentDeploymentBranchPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewers">reviewers</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList">RepositoryEnvironmentReviewersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicyInput">deploymentBranchPolicyInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewersInput">reviewersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimerInput">waitTimerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimer">waitTimer</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentBranchPolicy`<sup>Required</sup> <a name="deploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicy"></a>

```java
public RepositoryEnvironmentDeploymentBranchPolicyOutputReference getDeploymentBranchPolicy();
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference">RepositoryEnvironmentDeploymentBranchPolicyOutputReference</a>

---

##### `reviewers`<sup>Required</sup> <a name="reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewers"></a>

```java
public RepositoryEnvironmentReviewersList getReviewers();
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList">RepositoryEnvironmentReviewersList</a>

---

##### `deploymentBranchPolicyInput`<sup>Optional</sup> <a name="deploymentBranchPolicyInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicyInput"></a>

```java
public RepositoryEnvironmentDeploymentBranchPolicy getDeploymentBranchPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `reviewersInput`<sup>Optional</sup> <a name="reviewersInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewersInput"></a>

```java
public java.lang.Object getReviewersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>>

---

##### `waitTimerInput`<sup>Optional</sup> <a name="waitTimerInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimerInput"></a>

```java
public java.lang.Number getWaitTimerInput();
```

- *Type:* java.lang.Number

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `waitTimer`<sup>Required</sup> <a name="waitTimer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimer"></a>

```java
public java.lang.Number getWaitTimer();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryEnvironmentConfig <a name="RepositoryEnvironmentConfig" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironmentConfig;

RepositoryEnvironmentConfig.builder()
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
    .environment(java.lang.String)
    .repository(java.lang.String)
//  .deploymentBranchPolicy(RepositoryEnvironmentDeploymentBranchPolicy)
//  .id(java.lang.String)
//  .reviewers(IResolvable)
//  .reviewers(java.util.List<RepositoryEnvironmentReviewers>)
//  .waitTimer(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The repository of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.deploymentBranchPolicy">deploymentBranchPolicy</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | deployment_branch_policy block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#id RepositoryEnvironment#id}. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.reviewers">reviewers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>></code> | reviewers block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.waitTimer">waitTimer</a></code> | <code>java.lang.Number</code> | Amount of time to delay a job after the job is initially triggered. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#environment RepositoryEnvironment#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The repository of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#repository RepositoryEnvironment#repository}

---

##### `deploymentBranchPolicy`<sup>Optional</sup> <a name="deploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.deploymentBranchPolicy"></a>

```java
public RepositoryEnvironmentDeploymentBranchPolicy getDeploymentBranchPolicy();
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

deployment_branch_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#id RepositoryEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.reviewers"></a>

```java
public java.lang.Object getReviewers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>>

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#reviewers RepositoryEnvironment#reviewers}

---

##### `waitTimer`<sup>Optional</sup> <a name="waitTimer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.waitTimer"></a>

```java
public java.lang.Number getWaitTimer();
```

- *Type:* java.lang.Number

Amount of time to delay a job after the job is initially triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#wait_timer RepositoryEnvironment#wait_timer}

---

### RepositoryEnvironmentDeploymentBranchPolicy <a name="RepositoryEnvironmentDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironmentDeploymentBranchPolicy;

RepositoryEnvironmentDeploymentBranchPolicy.builder()
    .customBranchPolicies(java.lang.Boolean)
    .customBranchPolicies(IResolvable)
    .protectedBranches(java.lang.Boolean)
    .protectedBranches(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.customBranchPolicies">customBranchPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether only branches that match the specified name patterns can deploy to this environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.protectedBranches">protectedBranches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether only branches with branch protection rules can deploy to this environment. |

---

##### `customBranchPolicies`<sup>Required</sup> <a name="customBranchPolicies" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.customBranchPolicies"></a>

```java
public java.lang.Object getCustomBranchPolicies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether only branches that match the specified name patterns can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#custom_branch_policies RepositoryEnvironment#custom_branch_policies}

---

##### `protectedBranches`<sup>Required</sup> <a name="protectedBranches" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.protectedBranches"></a>

```java
public java.lang.Object getProtectedBranches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether only branches with branch protection rules can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#protected_branches RepositoryEnvironment#protected_branches}

---

### RepositoryEnvironmentReviewers <a name="RepositoryEnvironmentReviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironmentReviewers;

RepositoryEnvironmentReviewers.builder()
//  .teams(java.util.List<java.lang.Number>)
//  .users(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.teams">teams</a></code> | <code>java.util.List<java.lang.Number></code> | Up to 6 IDs for teams who may review jobs that reference the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.users">users</a></code> | <code>java.util.List<java.lang.Number></code> | Up to 6 IDs for users who may review jobs that reference the environment. |

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.teams"></a>

```java
public java.util.List<java.lang.Number> getTeams();
```

- *Type:* java.util.List<java.lang.Number>

Up to 6 IDs for teams who may review jobs that reference the environment.

Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#teams RepositoryEnvironment#teams}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.users"></a>

```java
public java.util.List<java.lang.Number> getUsers();
```

- *Type:* java.util.List<java.lang.Number>

Up to 6 IDs for users who may review jobs that reference the environment.

Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#users RepositoryEnvironment#users}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryEnvironmentDeploymentBranchPolicyOutputReference <a name="RepositoryEnvironmentDeploymentBranchPolicyOutputReference" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference;

new RepositoryEnvironmentDeploymentBranchPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPoliciesInput">customBranchPoliciesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranchesInput">protectedBranchesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPolicies">customBranchPolicies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranches">protectedBranches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customBranchPoliciesInput`<sup>Optional</sup> <a name="customBranchPoliciesInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPoliciesInput"></a>

```java
public java.lang.Object getCustomBranchPoliciesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protectedBranchesInput`<sup>Optional</sup> <a name="protectedBranchesInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranchesInput"></a>

```java
public java.lang.Object getProtectedBranchesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customBranchPolicies`<sup>Required</sup> <a name="customBranchPolicies" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPolicies"></a>

```java
public java.lang.Object getCustomBranchPolicies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `protectedBranches`<sup>Required</sup> <a name="protectedBranches" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranches"></a>

```java
public java.lang.Object getProtectedBranches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.internalValue"></a>

```java
public RepositoryEnvironmentDeploymentBranchPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---


### RepositoryEnvironmentReviewersList <a name="RepositoryEnvironmentReviewersList" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironmentReviewersList;

new RepositoryEnvironmentReviewersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get"></a>

```java
public RepositoryEnvironmentReviewersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>>

---


### RepositoryEnvironmentReviewersOutputReference <a name="RepositoryEnvironmentReviewersOutputReference" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_environment.RepositoryEnvironmentReviewersOutputReference;

new RepositoryEnvironmentReviewersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetTeams"></a>

```java
public void resetTeams()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetUsers"></a>

```java
public void resetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.usersInput">usersInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.users">users</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.Number> getTeamsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.usersInput"></a>

```java
public java.util.List<java.lang.Number> getUsersInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.Number> getTeams();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.users"></a>

```java
public java.util.List<java.lang.Number> getUsers();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>

---



