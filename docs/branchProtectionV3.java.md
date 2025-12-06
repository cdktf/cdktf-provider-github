# `branchProtectionV3` Submodule <a name="`branchProtectionV3` Submodule" id="@cdktf/provider-github.branchProtectionV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtectionV3 <a name="BranchProtectionV3" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3 github_branch_protection_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3;

BranchProtectionV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .branch(java.lang.String)
    .repository(java.lang.String)
//  .enforceAdmins(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .requireConversationResolution(java.lang.Boolean|IResolvable)
//  .requiredPullRequestReviews(BranchProtectionV3RequiredPullRequestReviews)
//  .requiredStatusChecks(BranchProtectionV3RequiredStatusChecks)
//  .requireSignedCommits(java.lang.Boolean|IResolvable)
//  .restrictions(BranchProtectionV3Restrictions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.branch">branch</a></code> | <code>java.lang.String</code> | The Git branch to protect. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.enforceAdmins">enforceAdmins</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#id BranchProtectionV3#id}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requireConversationResolution">requireConversationResolution</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requiredPullRequestReviews">requiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requireSignedCommits">requireSignedCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' requires all commits to be signed with GPG. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | restrictions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.branch"></a>

- *Type:* java.lang.String

The Git branch to protect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#branch BranchProtectionV3#branch}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#repository BranchProtectionV3#repository}

---

##### `enforceAdmins`<sup>Optional</sup> <a name="enforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.enforceAdmins"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#id BranchProtectionV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requireConversationResolution`<sup>Optional</sup> <a name="requireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requireConversationResolution"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}

---

##### `requiredPullRequestReviews`<sup>Optional</sup> <a name="requiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requiredPullRequestReviews"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}

---

##### `requiredStatusChecks`<sup>Optional</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requiredStatusChecks"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}

---

##### `requireSignedCommits`<sup>Optional</sup> <a name="requireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requireSignedCommits"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.restrictions"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#restrictions BranchProtectionV3#restrictions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews">putRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks">putRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins">resetEnforceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution">resetRequireConversationResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews">resetRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks">resetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits">resetRequireSignedCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions">resetRestrictions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequiredPullRequestReviews` <a name="putRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews"></a>

```java
public void putRequiredPullRequestReviews(BranchProtectionV3RequiredPullRequestReviews value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `putRequiredStatusChecks` <a name="putRequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks"></a>

```java
public void putRequiredStatusChecks(BranchProtectionV3RequiredStatusChecks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `putRestrictions` <a name="putRestrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions"></a>

```java
public void putRestrictions(BranchProtectionV3Restrictions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `resetEnforceAdmins` <a name="resetEnforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins"></a>

```java
public void resetEnforceAdmins()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId"></a>

```java
public void resetId()
```

##### `resetRequireConversationResolution` <a name="resetRequireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution"></a>

```java
public void resetRequireConversationResolution()
```

##### `resetRequiredPullRequestReviews` <a name="resetRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews"></a>

```java
public void resetRequiredPullRequestReviews()
```

##### `resetRequiredStatusChecks` <a name="resetRequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks"></a>

```java
public void resetRequiredStatusChecks()
```

##### `resetRequireSignedCommits` <a name="resetRequireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits"></a>

```java
public void resetRequireSignedCommits()
```

##### `resetRestrictions` <a name="resetRestrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions"></a>

```java
public void resetRestrictions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BranchProtectionV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3;

BranchProtectionV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3;

BranchProtectionV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3;

BranchProtectionV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3;

BranchProtectionV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BranchProtectionV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BranchProtectionV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BranchProtectionV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BranchProtectionV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BranchProtectionV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews">requiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput">enforceAdminsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput">requireConversationResolutionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput">requiredPullRequestReviewsInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput">requiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput">requireSignedCommitsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput">restrictionsInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins">enforceAdmins</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution">requireConversationResolution</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits">requireSignedCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `requiredPullRequestReviews`<sup>Required</sup> <a name="requiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews"></a>

```java
public BranchProtectionV3RequiredPullRequestReviewsOutputReference getRequiredPullRequestReviews();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a>

---

##### `requiredStatusChecks`<sup>Required</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks"></a>

```java
public BranchProtectionV3RequiredStatusChecksOutputReference getRequiredStatusChecks();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a>

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions"></a>

```java
public BranchProtectionV3RestrictionsOutputReference getRestrictions();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a>

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `enforceAdminsInput`<sup>Optional</sup> <a name="enforceAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnforceAdminsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `requireConversationResolutionInput`<sup>Optional</sup> <a name="requireConversationResolutionInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireConversationResolutionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredPullRequestReviewsInput`<sup>Optional</sup> <a name="requiredPullRequestReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput"></a>

```java
public BranchProtectionV3RequiredPullRequestReviews getRequiredPullRequestReviewsInput();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `requiredStatusChecksInput`<sup>Optional</sup> <a name="requiredStatusChecksInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput"></a>

```java
public BranchProtectionV3RequiredStatusChecks getRequiredStatusChecksInput();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `requireSignedCommitsInput`<sup>Optional</sup> <a name="requireSignedCommitsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireSignedCommitsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput"></a>

```java
public BranchProtectionV3Restrictions getRestrictionsInput();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `enforceAdmins`<sup>Required</sup> <a name="enforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins"></a>

```java
public java.lang.Boolean|IResolvable getEnforceAdmins();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `requireConversationResolution`<sup>Required</sup> <a name="requireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution"></a>

```java
public java.lang.Boolean|IResolvable getRequireConversationResolution();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireSignedCommits`<sup>Required</sup> <a name="requireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits"></a>

```java
public java.lang.Boolean|IResolvable getRequireSignedCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionV3Config <a name="BranchProtectionV3Config" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3Config;

BranchProtectionV3Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .branch(java.lang.String)
    .repository(java.lang.String)
//  .enforceAdmins(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .requireConversationResolution(java.lang.Boolean|IResolvable)
//  .requiredPullRequestReviews(BranchProtectionV3RequiredPullRequestReviews)
//  .requiredStatusChecks(BranchProtectionV3RequiredStatusChecks)
//  .requireSignedCommits(java.lang.Boolean|IResolvable)
//  .restrictions(BranchProtectionV3Restrictions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch">branch</a></code> | <code>java.lang.String</code> | The Git branch to protect. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository">repository</a></code> | <code>java.lang.String</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins">enforceAdmins</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#id BranchProtectionV3#id}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution">requireConversationResolution</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews">requiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits">requireSignedCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' requires all commits to be signed with GPG. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | restrictions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The Git branch to protect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#branch BranchProtectionV3#branch}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#repository BranchProtectionV3#repository}

---

##### `enforceAdmins`<sup>Optional</sup> <a name="enforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins"></a>

```java
public java.lang.Boolean|IResolvable getEnforceAdmins();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#id BranchProtectionV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requireConversationResolution`<sup>Optional</sup> <a name="requireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution"></a>

```java
public java.lang.Boolean|IResolvable getRequireConversationResolution();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}

---

##### `requiredPullRequestReviews`<sup>Optional</sup> <a name="requiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews"></a>

```java
public BranchProtectionV3RequiredPullRequestReviews getRequiredPullRequestReviews();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}

---

##### `requiredStatusChecks`<sup>Optional</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks"></a>

```java
public BranchProtectionV3RequiredStatusChecks getRequiredStatusChecks();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}

---

##### `requireSignedCommits`<sup>Optional</sup> <a name="requireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits"></a>

```java
public java.lang.Boolean|IResolvable getRequireSignedCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions"></a>

```java
public BranchProtectionV3Restrictions getRestrictions();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#restrictions BranchProtectionV3#restrictions}

---

### BranchProtectionV3RequiredPullRequestReviews <a name="BranchProtectionV3RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3RequiredPullRequestReviews;

BranchProtectionV3RequiredPullRequestReviews.builder()
//  .bypassPullRequestAllowances(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances)
//  .dismissalApps(java.util.List<java.lang.String>)
//  .dismissalTeams(java.util.List<java.lang.String>)
//  .dismissalUsers(java.util.List<java.lang.String>)
//  .dismissStaleReviews(java.lang.Boolean|IResolvable)
//  .includeAdmins(java.lang.Boolean|IResolvable)
//  .requireCodeOwnerReviews(java.lang.Boolean|IResolvable)
//  .requiredApprovingReviewCount(java.lang.Number)
//  .requireLastPushApproval(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances">bypassPullRequestAllowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | bypass_pull_request_allowances block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalApps">dismissalApps</a></code> | <code>java.util.List<java.lang.String></code> | The list of apps slugs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams">dismissalTeams</a></code> | <code>java.util.List<java.lang.String></code> | The list of team slugs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers">dismissalUsers</a></code> | <code>java.util.List<java.lang.String></code> | The list of user logins with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews">dismissStaleReviews</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins">includeAdmins</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews">requireCodeOwnerReviews</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>java.lang.Number</code> | Require 'x' number of approvals to satisfy branch protection requirements. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Require that the most recent push must be approved by someone other than the last pusher. |

---

##### `bypassPullRequestAllowances`<sup>Optional</sup> <a name="bypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances"></a>

```java
public BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances getBypassPullRequestAllowances();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

bypass_pull_request_allowances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#bypass_pull_request_allowances BranchProtectionV3#bypass_pull_request_allowances}

---

##### `dismissalApps`<sup>Optional</sup> <a name="dismissalApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalApps"></a>

```java
public java.util.List<java.lang.String> getDismissalApps();
```

- *Type:* java.util.List<java.lang.String>

The list of apps slugs with dismissal access.

Always use slug of the app, not its name. Each app already has to have access to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#dismissal_apps BranchProtectionV3#dismissal_apps}

---

##### `dismissalTeams`<sup>Optional</sup> <a name="dismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams"></a>

```java
public java.util.List<java.lang.String> getDismissalTeams();
```

- *Type:* java.util.List<java.lang.String>

The list of team slugs with dismissal access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#dismissal_teams BranchProtectionV3#dismissal_teams}

---

##### `dismissalUsers`<sup>Optional</sup> <a name="dismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers"></a>

```java
public java.util.List<java.lang.String> getDismissalUsers();
```

- *Type:* java.util.List<java.lang.String>

The list of user logins with dismissal access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#dismissal_users BranchProtectionV3#dismissal_users}

---

##### `dismissStaleReviews`<sup>Optional</sup> <a name="dismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews"></a>

```java
public java.lang.Boolean|IResolvable getDismissStaleReviews();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}

---

##### `includeAdmins`<sup>Optional</sup> <a name="includeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAdmins();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `requireCodeOwnerReviews`<sup>Optional</sup> <a name="requireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```java
public java.lang.Boolean|IResolvable getRequireCodeOwnerReviews();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}

---

##### `requiredApprovingReviewCount`<sup>Optional</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```java
public java.lang.Number getRequiredApprovingReviewCount();
```

- *Type:* java.lang.Number

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#required_approving_review_count BranchProtectionV3#required_approving_review_count}

---

##### `requireLastPushApproval`<sup>Optional</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireLastPushApproval"></a>

```java
public java.lang.Boolean|IResolvable getRequireLastPushApproval();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Require that the most recent push must be approved by someone other than the last pusher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#require_last_push_approval BranchProtectionV3#require_last_push_approval}

---

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances;

BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.builder()
//  .apps(java.util.List<java.lang.String>)
//  .teams(java.util.List<java.lang.String>)
//  .users(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps">apps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#apps BranchProtectionV3#apps}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#teams BranchProtectionV3#teams}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#users BranchProtectionV3#users}. |

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps"></a>

```java
public java.util.List<java.lang.String> getApps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#apps BranchProtectionV3#apps}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#teams BranchProtectionV3#teams}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#users BranchProtectionV3#users}.

---

### BranchProtectionV3RequiredStatusChecks <a name="BranchProtectionV3RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3RequiredStatusChecks;

BranchProtectionV3RequiredStatusChecks.builder()
//  .checks(java.util.List<java.lang.String>)
//  .contexts(java.util.List<java.lang.String>)
//  .includeAdmins(java.lang.Boolean|IResolvable)
//  .strict(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks">checks</a></code> | <code>java.util.List<java.lang.String></code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts">contexts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#contexts BranchProtectionV3#contexts}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins">includeAdmins</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict">strict</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Require branches to be up to date before merging. |

---

##### `checks`<sup>Optional</sup> <a name="checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks"></a>

```java
public java.util.List<java.lang.String> getChecks();
```

- *Type:* java.util.List<java.lang.String>

The list of status checks to require in order to merge into this branch.

No status checks are required by default. Checks should be strings containing the 'context' and 'app_id' like so 'context:app_id'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#checks BranchProtectionV3#checks}

---

##### `contexts`<sup>Optional</sup> <a name="contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts"></a>

```java
public java.util.List<java.lang.String> getContexts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#contexts BranchProtectionV3#contexts}.

---

##### `includeAdmins`<sup>Optional</sup> <a name="includeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAdmins();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict"></a>

```java
public java.lang.Boolean|IResolvable getStrict();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#strict BranchProtectionV3#strict}

---

### BranchProtectionV3Restrictions <a name="BranchProtectionV3Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3Restrictions;

BranchProtectionV3Restrictions.builder()
//  .apps(java.util.List<java.lang.String>)
//  .teams(java.util.List<java.lang.String>)
//  .users(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps">apps</a></code> | <code>java.util.List<java.lang.String></code> | The list of app slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The list of team slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | The list of user logins with push access. |

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps"></a>

```java
public java.util.List<java.lang.String> getApps();
```

- *Type:* java.util.List<java.lang.String>

The list of app slugs with push access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#apps BranchProtectionV3#apps}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The list of team slugs with push access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#teams BranchProtectionV3#teams}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

The list of user logins with push access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/branch_protection_v3#users BranchProtectionV3#users}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference;

new BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps">resetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApps` <a name="resetApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps"></a>

```java
public void resetApps()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams"></a>

```java
public void resetTeams()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers"></a>

```java
public void resetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput">appsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput">usersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps">apps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appsInput`<sup>Optional</sup> <a name="appsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput"></a>

```java
public java.util.List<java.lang.String> getAppsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput"></a>

```java
public java.util.List<java.lang.String> getUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps"></a>

```java
public java.util.List<java.lang.String> getApps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue"></a>

```java
public BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---


### BranchProtectionV3RequiredPullRequestReviewsOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3RequiredPullRequestReviewsOutputReference;

new BranchProtectionV3RequiredPullRequestReviewsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances">putBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances">resetBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalApps">resetDismissalApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams">resetDismissalTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers">resetDismissalUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">resetDismissStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins">resetIncludeAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">resetRequireCodeOwnerReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">resetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval">resetRequireLastPushApproval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBypassPullRequestAllowances` <a name="putBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances"></a>

```java
public void putBypassPullRequestAllowances(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `resetBypassPullRequestAllowances` <a name="resetBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances"></a>

```java
public void resetBypassPullRequestAllowances()
```

##### `resetDismissalApps` <a name="resetDismissalApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalApps"></a>

```java
public void resetDismissalApps()
```

##### `resetDismissalTeams` <a name="resetDismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams"></a>

```java
public void resetDismissalTeams()
```

##### `resetDismissalUsers` <a name="resetDismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers"></a>

```java
public void resetDismissalUsers()
```

##### `resetDismissStaleReviews` <a name="resetDismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```java
public void resetDismissStaleReviews()
```

##### `resetIncludeAdmins` <a name="resetIncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins"></a>

```java
public void resetIncludeAdmins()
```

##### `resetRequireCodeOwnerReviews` <a name="resetRequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```java
public void resetRequireCodeOwnerReviews()
```

##### `resetRequiredApprovingReviewCount` <a name="resetRequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```java
public void resetRequiredApprovingReviewCount()
```

##### `resetRequireLastPushApproval` <a name="resetRequireLastPushApproval" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval"></a>

```java
public void resetRequireLastPushApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances">bypassPullRequestAllowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput">bypassPullRequestAllowancesInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalAppsInput">dismissalAppsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput">dismissalTeamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput">dismissalUsersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">dismissStaleReviewsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput">includeAdminsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">requireCodeOwnerReviewsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">requiredApprovingReviewCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput">requireLastPushApprovalInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalApps">dismissalApps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams">dismissalTeams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers">dismissalUsers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">dismissStaleReviews</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins">includeAdmins</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">requireCodeOwnerReviews</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassPullRequestAllowances`<sup>Required</sup> <a name="bypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances"></a>

```java
public BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference getBypassPullRequestAllowances();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a>

---

##### `bypassPullRequestAllowancesInput`<sup>Optional</sup> <a name="bypassPullRequestAllowancesInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput"></a>

```java
public BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances getBypassPullRequestAllowancesInput();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `dismissalAppsInput`<sup>Optional</sup> <a name="dismissalAppsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalAppsInput"></a>

```java
public java.util.List<java.lang.String> getDismissalAppsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dismissalTeamsInput`<sup>Optional</sup> <a name="dismissalTeamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput"></a>

```java
public java.util.List<java.lang.String> getDismissalTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dismissalUsersInput`<sup>Optional</sup> <a name="dismissalUsersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput"></a>

```java
public java.util.List<java.lang.String> getDismissalUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dismissStaleReviewsInput`<sup>Optional</sup> <a name="dismissStaleReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```java
public java.lang.Boolean|IResolvable getDismissStaleReviewsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `includeAdminsInput`<sup>Optional</sup> <a name="includeAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAdminsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireCodeOwnerReviewsInput`<sup>Optional</sup> <a name="requireCodeOwnerReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireCodeOwnerReviewsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovingReviewCountInput`<sup>Optional</sup> <a name="requiredApprovingReviewCountInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```java
public java.lang.Number getRequiredApprovingReviewCountInput();
```

- *Type:* java.lang.Number

---

##### `requireLastPushApprovalInput`<sup>Optional</sup> <a name="requireLastPushApprovalInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireLastPushApprovalInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dismissalApps`<sup>Required</sup> <a name="dismissalApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalApps"></a>

```java
public java.util.List<java.lang.String> getDismissalApps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dismissalTeams`<sup>Required</sup> <a name="dismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams"></a>

```java
public java.util.List<java.lang.String> getDismissalTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dismissalUsers`<sup>Required</sup> <a name="dismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers"></a>

```java
public java.util.List<java.lang.String> getDismissalUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dismissStaleReviews`<sup>Required</sup> <a name="dismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```java
public java.lang.Boolean|IResolvable getDismissStaleReviews();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `includeAdmins`<sup>Required</sup> <a name="includeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAdmins();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireCodeOwnerReviews`<sup>Required</sup> <a name="requireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```java
public java.lang.Boolean|IResolvable getRequireCodeOwnerReviews();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovingReviewCount`<sup>Required</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```java
public java.lang.Number getRequiredApprovingReviewCount();
```

- *Type:* java.lang.Number

---

##### `requireLastPushApproval`<sup>Required</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireLastPushApproval"></a>

```java
public java.lang.Boolean|IResolvable getRequireLastPushApproval();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```java
public BranchProtectionV3RequiredPullRequestReviews getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---


### BranchProtectionV3RequiredStatusChecksOutputReference <a name="BranchProtectionV3RequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3RequiredStatusChecksOutputReference;

new BranchProtectionV3RequiredStatusChecksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks">resetChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts">resetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins">resetIncludeAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict">resetStrict</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChecks` <a name="resetChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks"></a>

```java
public void resetChecks()
```

##### `resetContexts` <a name="resetContexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts"></a>

```java
public void resetContexts()
```

##### `resetIncludeAdmins` <a name="resetIncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins"></a>

```java
public void resetIncludeAdmins()
```

##### `resetStrict` <a name="resetStrict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict"></a>

```java
public void resetStrict()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput">checksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput">contextsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput">includeAdminsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput">strictInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks">checks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts">contexts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins">includeAdmins</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict">strict</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checksInput`<sup>Optional</sup> <a name="checksInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput"></a>

```java
public java.util.List<java.lang.String> getChecksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contextsInput`<sup>Optional</sup> <a name="contextsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput"></a>

```java
public java.util.List<java.lang.String> getContextsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeAdminsInput`<sup>Optional</sup> <a name="includeAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAdminsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `strictInput`<sup>Optional</sup> <a name="strictInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput"></a>

```java
public java.lang.Boolean|IResolvable getStrictInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks"></a>

```java
public java.util.List<java.lang.String> getChecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contexts`<sup>Required</sup> <a name="contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts"></a>

```java
public java.util.List<java.lang.String> getContexts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeAdmins`<sup>Required</sup> <a name="includeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins"></a>

```java
public java.lang.Boolean|IResolvable getIncludeAdmins();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict"></a>

```java
public java.lang.Boolean|IResolvable getStrict();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue"></a>

```java
public BranchProtectionV3RequiredStatusChecks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---


### BranchProtectionV3RestrictionsOutputReference <a name="BranchProtectionV3RestrictionsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection_v3.BranchProtectionV3RestrictionsOutputReference;

new BranchProtectionV3RestrictionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps">resetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApps` <a name="resetApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps"></a>

```java
public void resetApps()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams"></a>

```java
public void resetTeams()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers"></a>

```java
public void resetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput">appsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput">usersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps">apps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appsInput`<sup>Optional</sup> <a name="appsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput"></a>

```java
public java.util.List<java.lang.String> getAppsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput"></a>

```java
public java.util.List<java.lang.String> getUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps"></a>

```java
public java.util.List<java.lang.String> getApps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue"></a>

```java
public BranchProtectionV3Restrictions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---



