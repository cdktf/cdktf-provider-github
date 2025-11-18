# `workflowRepositoryPermissions` Submodule <a name="`workflowRepositoryPermissions` Submodule" id="@cdktf/provider-github.workflowRepositoryPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowRepositoryPermissions <a name="WorkflowRepositoryPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions github_workflow_repository_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.workflow_repository_permissions.WorkflowRepositoryPermissions;

WorkflowRepositoryPermissions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repository(java.lang.String)
//  .canApprovePullRequestReviews(java.lang.Boolean|IResolvable)
//  .defaultWorkflowPermissions(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether GitHub Actions can approve pull requests. Enabling this can be a security risk. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>java.lang.String</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#repository WorkflowRepositoryPermissions#repository}

---

##### `canApprovePullRequestReviews`<sup>Optional</sup> <a name="canApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.canApprovePullRequestReviews"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#can_approve_pull_request_reviews WorkflowRepositoryPermissions#can_approve_pull_request_reviews}

---

##### `defaultWorkflowPermissions`<sup>Optional</sup> <a name="defaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.defaultWorkflowPermissions"></a>

- *Type:* java.lang.String

The default workflow permissions granted to the GITHUB_TOKEN when running workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#default_workflow_permissions WorkflowRepositoryPermissions#default_workflow_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetCanApprovePullRequestReviews">resetCanApprovePullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetDefaultWorkflowPermissions">resetDefaultWorkflowPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCanApprovePullRequestReviews` <a name="resetCanApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetCanApprovePullRequestReviews"></a>

```java
public void resetCanApprovePullRequestReviews()
```

##### `resetDefaultWorkflowPermissions` <a name="resetDefaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetDefaultWorkflowPermissions"></a>

```java
public void resetDefaultWorkflowPermissions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkflowRepositoryPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.workflow_repository_permissions.WorkflowRepositoryPermissions;

WorkflowRepositoryPermissions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.workflow_repository_permissions.WorkflowRepositoryPermissions;

WorkflowRepositoryPermissions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.workflow_repository_permissions.WorkflowRepositoryPermissions;

WorkflowRepositoryPermissions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.workflow_repository_permissions.WorkflowRepositoryPermissions;

WorkflowRepositoryPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkflowRepositoryPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkflowRepositoryPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkflowRepositoryPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkflowRepositoryPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkflowRepositoryPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviewsInput">canApprovePullRequestReviewsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissionsInput">defaultWorkflowPermissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `canApprovePullRequestReviewsInput`<sup>Optional</sup> <a name="canApprovePullRequestReviewsInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviewsInput"></a>

```java
public java.lang.Boolean|IResolvable getCanApprovePullRequestReviewsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `defaultWorkflowPermissionsInput`<sup>Optional</sup> <a name="defaultWorkflowPermissionsInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissionsInput"></a>

```java
public java.lang.String getDefaultWorkflowPermissionsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `canApprovePullRequestReviews`<sup>Required</sup> <a name="canApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviews"></a>

```java
public java.lang.Boolean|IResolvable getCanApprovePullRequestReviews();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `defaultWorkflowPermissions`<sup>Required</sup> <a name="defaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissions"></a>

```java
public java.lang.String getDefaultWorkflowPermissions();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowRepositoryPermissionsConfig <a name="WorkflowRepositoryPermissionsConfig" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.workflow_repository_permissions.WorkflowRepositoryPermissionsConfig;

WorkflowRepositoryPermissionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .repository(java.lang.String)
//  .canApprovePullRequestReviews(java.lang.Boolean|IResolvable)
//  .defaultWorkflowPermissions(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether GitHub Actions can approve pull requests. Enabling this can be a security risk. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>java.lang.String</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#repository WorkflowRepositoryPermissions#repository}

---

##### `canApprovePullRequestReviews`<sup>Optional</sup> <a name="canApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.canApprovePullRequestReviews"></a>

```java
public java.lang.Boolean|IResolvable getCanApprovePullRequestReviews();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#can_approve_pull_request_reviews WorkflowRepositoryPermissions#can_approve_pull_request_reviews}

---

##### `defaultWorkflowPermissions`<sup>Optional</sup> <a name="defaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.defaultWorkflowPermissions"></a>

```java
public java.lang.String getDefaultWorkflowPermissions();
```

- *Type:* java.lang.String

The default workflow permissions granted to the GITHUB_TOKEN when running workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#default_workflow_permissions WorkflowRepositoryPermissions#default_workflow_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



