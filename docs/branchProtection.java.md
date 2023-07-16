# `github_branch_protection`

Refer to the Terraform Registory for docs: [`github_branch_protection`](https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection).

# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-github.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-github.branchProtection.BranchProtection"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection github_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtection;

BranchProtection.Builder.create(Construct scope, java.lang.String id)
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
    .pattern(java.lang.String)
    .repositoryId(java.lang.String)
//  .allowsDeletions(java.lang.Boolean)
//  .allowsDeletions(IResolvable)
//  .allowsForcePushes(java.lang.Boolean)
//  .allowsForcePushes(IResolvable)
//  .blocksCreations(java.lang.Boolean)
//  .blocksCreations(IResolvable)
//  .enforceAdmins(java.lang.Boolean)
//  .enforceAdmins(IResolvable)
//  .forcePushBypassers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .lockBranch(java.lang.Boolean)
//  .lockBranch(IResolvable)
//  .pushRestrictions(java.util.List<java.lang.String>)
//  .requireConversationResolution(java.lang.Boolean)
//  .requireConversationResolution(IResolvable)
//  .requiredLinearHistory(java.lang.Boolean)
//  .requiredLinearHistory(IResolvable)
//  .requiredPullRequestReviews(IResolvable)
//  .requiredPullRequestReviews(java.util.List<BranchProtectionRequiredPullRequestReviews>)
//  .requiredStatusChecks(IResolvable)
//  .requiredStatusChecks(java.util.List<BranchProtectionRequiredStatusChecks>)
//  .requireSignedCommits(java.lang.Boolean)
//  .requireSignedCommits(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.pattern">pattern</a></code> | <code>java.lang.String</code> | Identifies the protection rule pattern. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The name or node ID of the repository associated with this branch protection rule. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.allowsDeletions">allowsDeletions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' to allow the branch to be deleted. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.allowsForcePushes">allowsForcePushes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' to allow force pushes on the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.blocksCreations">blocksCreations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' to block creating the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.enforceAdmins">enforceAdmins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.forcePushBypassers">forcePushBypassers</a></code> | <code>java.util.List<java.lang.String></code> | The list of actor Names/IDs that are allowed to bypass force push restrictions. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.lockBranch">lockBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' will make the branch read-only and preventing any pushes to it. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.pushRestrictions">pushRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actor Names/IDs that may push to the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requireConversationResolution">requireConversationResolution</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredLinearHistory">requiredLinearHistory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredPullRequestReviews">requiredPullRequestReviews</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredStatusChecks">requiredStatusChecks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requireSignedCommits">requireSignedCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' requires all commits to be signed with GPG. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.pattern"></a>

- *Type:* java.lang.String

Identifies the protection rule pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#pattern BranchProtection#pattern}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

The name or node ID of the repository associated with this branch protection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#repository_id BranchProtection#repository_id}

---

##### `allowsDeletions`<sup>Optional</sup> <a name="allowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.allowsDeletions"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' to allow the branch to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#allows_deletions BranchProtection#allows_deletions}

---

##### `allowsForcePushes`<sup>Optional</sup> <a name="allowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.allowsForcePushes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' to allow force pushes on the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}

---

##### `blocksCreations`<sup>Optional</sup> <a name="blocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.blocksCreations"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' to block creating the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#blocks_creations BranchProtection#blocks_creations}

---

##### `enforceAdmins`<sup>Optional</sup> <a name="enforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.enforceAdmins"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#enforce_admins BranchProtection#enforce_admins}

---

##### `forcePushBypassers`<sup>Optional</sup> <a name="forcePushBypassers" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.forcePushBypassers"></a>

- *Type:* java.util.List<java.lang.String>

The list of actor Names/IDs that are allowed to bypass force push restrictions.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#force_push_bypassers BranchProtection#force_push_bypassers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockBranch`<sup>Optional</sup> <a name="lockBranch" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.lockBranch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' will make the branch read-only and preventing any pushes to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#lock_branch BranchProtection#lock_branch}

---

##### `pushRestrictions`<sup>Optional</sup> <a name="pushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.pushRestrictions"></a>

- *Type:* java.util.List<java.lang.String>

The list of actor Names/IDs that may push to the branch.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#push_restrictions BranchProtection#push_restrictions}

---

##### `requireConversationResolution`<sup>Optional</sup> <a name="requireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requireConversationResolution"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}

---

##### `requiredLinearHistory`<sup>Optional</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredLinearHistory"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#required_linear_history BranchProtection#required_linear_history}

---

##### `requiredPullRequestReviews`<sup>Optional</sup> <a name="requiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredPullRequestReviews"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}

---

##### `requiredStatusChecks`<sup>Optional</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredStatusChecks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#required_status_checks BranchProtection#required_status_checks}

---

##### `requireSignedCommits`<sup>Optional</sup> <a name="requireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requireSignedCommits"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#require_signed_commits BranchProtection#require_signed_commits}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews">putRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks">putRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsDeletions">resetAllowsDeletions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes">resetAllowsForcePushes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetBlocksCreations">resetBlocksCreations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetEnforceAdmins">resetEnforceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetForcePushBypassers">resetForcePushBypassers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetLockBranch">resetLockBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetPushRestrictions">resetPushRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution">resetRequireConversationResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory">resetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews">resetRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks">resetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits">resetRequireSignedCommits</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtection.BranchProtection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.branchProtection.BranchProtection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.branchProtection.BranchProtection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRequiredPullRequestReviews` <a name="putRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews"></a>

```java
public void putRequiredPullRequestReviews(IResolvable OR java.util.List<BranchProtectionRequiredPullRequestReviews> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>>

---

##### `putRequiredStatusChecks` <a name="putRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks"></a>

```java
public void putRequiredStatusChecks(IResolvable OR java.util.List<BranchProtectionRequiredStatusChecks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>>

---

##### `resetAllowsDeletions` <a name="resetAllowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsDeletions"></a>

```java
public void resetAllowsDeletions()
```

##### `resetAllowsForcePushes` <a name="resetAllowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes"></a>

```java
public void resetAllowsForcePushes()
```

##### `resetBlocksCreations` <a name="resetBlocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtection.resetBlocksCreations"></a>

```java
public void resetBlocksCreations()
```

##### `resetEnforceAdmins` <a name="resetEnforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtection.resetEnforceAdmins"></a>

```java
public void resetEnforceAdmins()
```

##### `resetForcePushBypassers` <a name="resetForcePushBypassers" id="@cdktf/provider-github.branchProtection.BranchProtection.resetForcePushBypassers"></a>

```java
public void resetForcePushBypassers()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.branchProtection.BranchProtection.resetId"></a>

```java
public void resetId()
```

##### `resetLockBranch` <a name="resetLockBranch" id="@cdktf/provider-github.branchProtection.BranchProtection.resetLockBranch"></a>

```java
public void resetLockBranch()
```

##### `resetPushRestrictions` <a name="resetPushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.resetPushRestrictions"></a>

```java
public void resetPushRestrictions()
```

##### `resetRequireConversationResolution` <a name="resetRequireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution"></a>

```java
public void resetRequireConversationResolution()
```

##### `resetRequiredLinearHistory` <a name="resetRequiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory"></a>

```java
public void resetRequiredLinearHistory()
```

##### `resetRequiredPullRequestReviews` <a name="resetRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews"></a>

```java
public void resetRequiredPullRequestReviews()
```

##### `resetRequiredStatusChecks` <a name="resetRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks"></a>

```java
public void resetRequiredStatusChecks()
```

##### `resetRequireSignedCommits` <a name="resetRequireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits"></a>

```java
public void resetRequireSignedCommits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.branchProtection.BranchProtection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtection;

BranchProtection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtection;

BranchProtection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtection;

BranchProtection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews">requiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput">allowsDeletionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput">allowsForcePushesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreationsInput">blocksCreationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput">enforceAdminsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.forcePushBypassersInput">forcePushBypassersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranchInput">lockBranchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictionsInput">pushRestrictionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput">requireConversationResolutionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput">requiredLinearHistoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput">requiredPullRequestReviewsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput">requiredStatusChecksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput">requireSignedCommitsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletions">allowsDeletions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushes">allowsForcePushes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreations">blocksCreations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdmins">enforceAdmins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.forcePushBypassers">forcePushBypassers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranch">lockBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictions">pushRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolution">requireConversationResolution</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory">requiredLinearHistory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommits">requireSignedCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.branchProtection.BranchProtection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.branchProtection.BranchProtection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtection.BranchProtection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtection.BranchProtection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.branchProtection.BranchProtection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.branchProtection.BranchProtection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtection.BranchProtection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtection.BranchProtection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `requiredPullRequestReviews`<sup>Required</sup> <a name="requiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews"></a>

```java
public BranchProtectionRequiredPullRequestReviewsList getRequiredPullRequestReviews();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a>

---

##### `requiredStatusChecks`<sup>Required</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks"></a>

```java
public BranchProtectionRequiredStatusChecksList getRequiredStatusChecks();
```

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a>

---

##### `allowsDeletionsInput`<sup>Optional</sup> <a name="allowsDeletionsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput"></a>

```java
public java.lang.Object getAllowsDeletionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowsForcePushesInput`<sup>Optional</sup> <a name="allowsForcePushesInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput"></a>

```java
public java.lang.Object getAllowsForcePushesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blocksCreationsInput`<sup>Optional</sup> <a name="blocksCreationsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreationsInput"></a>

```java
public java.lang.Object getBlocksCreationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceAdminsInput`<sup>Optional</sup> <a name="enforceAdminsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput"></a>

```java
public java.lang.Object getEnforceAdminsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forcePushBypassersInput`<sup>Optional</sup> <a name="forcePushBypassersInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.forcePushBypassersInput"></a>

```java
public java.util.List<java.lang.String> getForcePushBypassersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lockBranchInput`<sup>Optional</sup> <a name="lockBranchInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranchInput"></a>

```java
public java.lang.Object getLockBranchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `pushRestrictionsInput`<sup>Optional</sup> <a name="pushRestrictionsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictionsInput"></a>

```java
public java.util.List<java.lang.String> getPushRestrictionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `requireConversationResolutionInput`<sup>Optional</sup> <a name="requireConversationResolutionInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput"></a>

```java
public java.lang.Object getRequireConversationResolutionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiredLinearHistoryInput`<sup>Optional</sup> <a name="requiredLinearHistoryInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput"></a>

```java
public java.lang.Object getRequiredLinearHistoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiredPullRequestReviewsInput`<sup>Optional</sup> <a name="requiredPullRequestReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput"></a>

```java
public java.lang.Object getRequiredPullRequestReviewsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>>

---

##### `requiredStatusChecksInput`<sup>Optional</sup> <a name="requiredStatusChecksInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput"></a>

```java
public java.lang.Object getRequiredStatusChecksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>>

---

##### `requireSignedCommitsInput`<sup>Optional</sup> <a name="requireSignedCommitsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput"></a>

```java
public java.lang.Object getRequireSignedCommitsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowsDeletions`<sup>Required</sup> <a name="allowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletions"></a>

```java
public java.lang.Object getAllowsDeletions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowsForcePushes`<sup>Required</sup> <a name="allowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushes"></a>

```java
public java.lang.Object getAllowsForcePushes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blocksCreations`<sup>Required</sup> <a name="blocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreations"></a>

```java
public java.lang.Object getBlocksCreations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceAdmins`<sup>Required</sup> <a name="enforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdmins"></a>

```java
public java.lang.Object getEnforceAdmins();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forcePushBypassers`<sup>Required</sup> <a name="forcePushBypassers" id="@cdktf/provider-github.branchProtection.BranchProtection.property.forcePushBypassers"></a>

```java
public java.util.List<java.lang.String> getForcePushBypassers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lockBranch`<sup>Required</sup> <a name="lockBranch" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranch"></a>

```java
public java.lang.Object getLockBranch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `pushRestrictions`<sup>Required</sup> <a name="pushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictions"></a>

```java
public java.util.List<java.lang.String> getPushRestrictions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `requireConversationResolution`<sup>Required</sup> <a name="requireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolution"></a>

```java
public java.lang.Object getRequireConversationResolution();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiredLinearHistory`<sup>Required</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory"></a>

```java
public java.lang.Object getRequiredLinearHistory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireSignedCommits`<sup>Required</sup> <a name="requireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommits"></a>

```java
public java.lang.Object getRequireSignedCommits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.branchProtection.BranchProtection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtectionConfig;

BranchProtectionConfig.builder()
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
    .pattern(java.lang.String)
    .repositoryId(java.lang.String)
//  .allowsDeletions(java.lang.Boolean)
//  .allowsDeletions(IResolvable)
//  .allowsForcePushes(java.lang.Boolean)
//  .allowsForcePushes(IResolvable)
//  .blocksCreations(java.lang.Boolean)
//  .blocksCreations(IResolvable)
//  .enforceAdmins(java.lang.Boolean)
//  .enforceAdmins(IResolvable)
//  .forcePushBypassers(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .lockBranch(java.lang.Boolean)
//  .lockBranch(IResolvable)
//  .pushRestrictions(java.util.List<java.lang.String>)
//  .requireConversationResolution(java.lang.Boolean)
//  .requireConversationResolution(IResolvable)
//  .requiredLinearHistory(java.lang.Boolean)
//  .requiredLinearHistory(IResolvable)
//  .requiredPullRequestReviews(IResolvable)
//  .requiredPullRequestReviews(java.util.List<BranchProtectionRequiredPullRequestReviews>)
//  .requiredStatusChecks(IResolvable)
//  .requiredStatusChecks(java.util.List<BranchProtectionRequiredStatusChecks>)
//  .requireSignedCommits(java.lang.Boolean)
//  .requireSignedCommits(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Identifies the protection rule pattern. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The name or node ID of the repository associated with this branch protection rule. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions">allowsDeletions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' to allow the branch to be deleted. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes">allowsForcePushes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' to allow force pushes on the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.blocksCreations">blocksCreations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' to block creating the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins">enforceAdmins</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forcePushBypassers">forcePushBypassers</a></code> | <code>java.util.List<java.lang.String></code> | The list of actor Names/IDs that are allowed to bypass force push restrictions. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch">lockBranch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' will make the branch read-only and preventing any pushes to it. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pushRestrictions">pushRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actor Names/IDs that may push to the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution">requireConversationResolution</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory">requiredLinearHistory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews">requiredPullRequestReviews</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits">requireSignedCommits</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to 'true' requires all commits to be signed with GPG. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Identifies the protection rule pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#pattern BranchProtection#pattern}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

The name or node ID of the repository associated with this branch protection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#repository_id BranchProtection#repository_id}

---

##### `allowsDeletions`<sup>Optional</sup> <a name="allowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions"></a>

```java
public java.lang.Object getAllowsDeletions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' to allow the branch to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#allows_deletions BranchProtection#allows_deletions}

---

##### `allowsForcePushes`<sup>Optional</sup> <a name="allowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes"></a>

```java
public java.lang.Object getAllowsForcePushes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' to allow force pushes on the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}

---

##### `blocksCreations`<sup>Optional</sup> <a name="blocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.blocksCreations"></a>

```java
public java.lang.Object getBlocksCreations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' to block creating the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#blocks_creations BranchProtection#blocks_creations}

---

##### `enforceAdmins`<sup>Optional</sup> <a name="enforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins"></a>

```java
public java.lang.Object getEnforceAdmins();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#enforce_admins BranchProtection#enforce_admins}

---

##### `forcePushBypassers`<sup>Optional</sup> <a name="forcePushBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forcePushBypassers"></a>

```java
public java.util.List<java.lang.String> getForcePushBypassers();
```

- *Type:* java.util.List<java.lang.String>

The list of actor Names/IDs that are allowed to bypass force push restrictions.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#force_push_bypassers BranchProtection#force_push_bypassers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockBranch`<sup>Optional</sup> <a name="lockBranch" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch"></a>

```java
public java.lang.Object getLockBranch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' will make the branch read-only and preventing any pushes to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#lock_branch BranchProtection#lock_branch}

---

##### `pushRestrictions`<sup>Optional</sup> <a name="pushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pushRestrictions"></a>

```java
public java.util.List<java.lang.String> getPushRestrictions();
```

- *Type:* java.util.List<java.lang.String>

The list of actor Names/IDs that may push to the branch.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#push_restrictions BranchProtection#push_restrictions}

---

##### `requireConversationResolution`<sup>Optional</sup> <a name="requireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution"></a>

```java
public java.lang.Object getRequireConversationResolution();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}

---

##### `requiredLinearHistory`<sup>Optional</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory"></a>

```java
public java.lang.Object getRequiredLinearHistory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#required_linear_history BranchProtection#required_linear_history}

---

##### `requiredPullRequestReviews`<sup>Optional</sup> <a name="requiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews"></a>

```java
public java.lang.Object getRequiredPullRequestReviews();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}

---

##### `requiredStatusChecks`<sup>Optional</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks"></a>

```java
public java.lang.Object getRequiredStatusChecks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#required_status_checks BranchProtection#required_status_checks}

---

##### `requireSignedCommits`<sup>Optional</sup> <a name="requireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits"></a>

```java
public java.lang.Object getRequireSignedCommits();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#require_signed_commits BranchProtection#require_signed_commits}

---

### BranchProtectionRequiredPullRequestReviews <a name="BranchProtectionRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtectionRequiredPullRequestReviews;

BranchProtectionRequiredPullRequestReviews.builder()
//  .dismissalRestrictions(java.util.List<java.lang.String>)
//  .dismissStaleReviews(java.lang.Boolean)
//  .dismissStaleReviews(IResolvable)
//  .pullRequestBypassers(java.util.List<java.lang.String>)
//  .requireCodeOwnerReviews(java.lang.Boolean)
//  .requireCodeOwnerReviews(IResolvable)
//  .requiredApprovingReviewCount(java.lang.Number)
//  .requireLastPushApproval(java.lang.Boolean)
//  .requireLastPushApproval(IResolvable)
//  .restrictDismissals(java.lang.Boolean)
//  .restrictDismissals(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions">dismissalRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | The list of actor Names/IDs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews">dismissStaleReviews</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers">pullRequestBypassers</a></code> | <code>java.util.List<java.lang.String></code> | The list of actor Names/IDs that are allowed to bypass pull request requirements. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews">requireCodeOwnerReviews</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>java.lang.Number</code> | Require 'x' number of approvals to satisfy branch protection requirements. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require that The most recent push must be approved by someone other than the last pusher. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals">restrictDismissals</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Restrict pull request review dismissals. |

---

##### `dismissalRestrictions`<sup>Optional</sup> <a name="dismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions"></a>

```java
public java.util.List<java.lang.String> getDismissalRestrictions();
```

- *Type:* java.util.List<java.lang.String>

The list of actor Names/IDs with dismissal access.

If not empty, 'restrict_dismissals' is ignored. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#dismissal_restrictions BranchProtection#dismissal_restrictions}

---

##### `dismissStaleReviews`<sup>Optional</sup> <a name="dismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews"></a>

```java
public java.lang.Object getDismissStaleReviews();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}

---

##### `pullRequestBypassers`<sup>Optional</sup> <a name="pullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers"></a>

```java
public java.util.List<java.lang.String> getPullRequestBypassers();
```

- *Type:* java.util.List<java.lang.String>

The list of actor Names/IDs that are allowed to bypass pull request requirements.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#pull_request_bypassers BranchProtection#pull_request_bypassers}

---

##### `requireCodeOwnerReviews`<sup>Optional</sup> <a name="requireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```java
public java.lang.Object getRequireCodeOwnerReviews();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#require_code_owner_reviews BranchProtection#require_code_owner_reviews}

---

##### `requiredApprovingReviewCount`<sup>Optional</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```java
public java.lang.Number getRequiredApprovingReviewCount();
```

- *Type:* java.lang.Number

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#required_approving_review_count BranchProtection#required_approving_review_count}

---

##### `requireLastPushApproval`<sup>Optional</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval"></a>

```java
public java.lang.Object getRequireLastPushApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require that The most recent push must be approved by someone other than the last pusher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#require_last_push_approval BranchProtection#require_last_push_approval}

---

##### `restrictDismissals`<sup>Optional</sup> <a name="restrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals"></a>

```java
public java.lang.Object getRestrictDismissals();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Restrict pull request review dismissals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#restrict_dismissals BranchProtection#restrict_dismissals}

---

### BranchProtectionRequiredStatusChecks <a name="BranchProtectionRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtectionRequiredStatusChecks;

BranchProtectionRequiredStatusChecks.builder()
//  .contexts(java.util.List<java.lang.String>)
//  .strict(java.lang.Boolean)
//  .strict(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts">contexts</a></code> | <code>java.util.List<java.lang.String></code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict">strict</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require branches to be up to date before merging. |

---

##### `contexts`<sup>Optional</sup> <a name="contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts"></a>

```java
public java.util.List<java.lang.String> getContexts();
```

- *Type:* java.util.List<java.lang.String>

The list of status checks to require in order to merge into this branch.

No status checks are required by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#contexts BranchProtection#contexts}

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict"></a>

```java
public java.lang.Object getStrict();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/branch_protection#strict BranchProtection#strict}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionRequiredPullRequestReviewsList <a name="BranchProtectionRequiredPullRequestReviewsList" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtectionRequiredPullRequestReviewsList;

new BranchProtectionRequiredPullRequestReviewsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get"></a>

```java
public BranchProtectionRequiredPullRequestReviewsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>>

---


### BranchProtectionRequiredPullRequestReviewsOutputReference <a name="BranchProtectionRequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtectionRequiredPullRequestReviewsOutputReference;

new BranchProtectionRequiredPullRequestReviewsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions">resetDismissalRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">resetDismissStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers">resetPullRequestBypassers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">resetRequireCodeOwnerReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">resetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval">resetRequireLastPushApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals">resetRestrictDismissals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDismissalRestrictions` <a name="resetDismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions"></a>

```java
public void resetDismissalRestrictions()
```

##### `resetDismissStaleReviews` <a name="resetDismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```java
public void resetDismissStaleReviews()
```

##### `resetPullRequestBypassers` <a name="resetPullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers"></a>

```java
public void resetPullRequestBypassers()
```

##### `resetRequireCodeOwnerReviews` <a name="resetRequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```java
public void resetRequireCodeOwnerReviews()
```

##### `resetRequiredApprovingReviewCount` <a name="resetRequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```java
public void resetRequiredApprovingReviewCount()
```

##### `resetRequireLastPushApproval` <a name="resetRequireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval"></a>

```java
public void resetRequireLastPushApproval()
```

##### `resetRestrictDismissals` <a name="resetRestrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals"></a>

```java
public void resetRestrictDismissals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput">dismissalRestrictionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">dismissStaleReviewsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput">pullRequestBypassersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">requireCodeOwnerReviewsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">requiredApprovingReviewCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput">requireLastPushApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput">restrictDismissalsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions">dismissalRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">dismissStaleReviews</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers">pullRequestBypassers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">requireCodeOwnerReviews</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals">restrictDismissals</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dismissalRestrictionsInput`<sup>Optional</sup> <a name="dismissalRestrictionsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput"></a>

```java
public java.util.List<java.lang.String> getDismissalRestrictionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dismissStaleReviewsInput`<sup>Optional</sup> <a name="dismissStaleReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```java
public java.lang.Object getDismissStaleReviewsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pullRequestBypassersInput`<sup>Optional</sup> <a name="pullRequestBypassersInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput"></a>

```java
public java.util.List<java.lang.String> getPullRequestBypassersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireCodeOwnerReviewsInput`<sup>Optional</sup> <a name="requireCodeOwnerReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```java
public java.lang.Object getRequireCodeOwnerReviewsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovingReviewCountInput`<sup>Optional</sup> <a name="requiredApprovingReviewCountInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```java
public java.lang.Number getRequiredApprovingReviewCountInput();
```

- *Type:* java.lang.Number

---

##### `requireLastPushApprovalInput`<sup>Optional</sup> <a name="requireLastPushApprovalInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput"></a>

```java
public java.lang.Object getRequireLastPushApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictDismissalsInput`<sup>Optional</sup> <a name="restrictDismissalsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput"></a>

```java
public java.lang.Object getRestrictDismissalsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dismissalRestrictions`<sup>Required</sup> <a name="dismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions"></a>

```java
public java.util.List<java.lang.String> getDismissalRestrictions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dismissStaleReviews`<sup>Required</sup> <a name="dismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```java
public java.lang.Object getDismissStaleReviews();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pullRequestBypassers`<sup>Required</sup> <a name="pullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers"></a>

```java
public java.util.List<java.lang.String> getPullRequestBypassers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireCodeOwnerReviews`<sup>Required</sup> <a name="requireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```java
public java.lang.Object getRequireCodeOwnerReviews();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovingReviewCount`<sup>Required</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```java
public java.lang.Number getRequiredApprovingReviewCount();
```

- *Type:* java.lang.Number

---

##### `requireLastPushApproval`<sup>Required</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval"></a>

```java
public java.lang.Object getRequireLastPushApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictDismissals`<sup>Required</sup> <a name="restrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals"></a>

```java
public java.lang.Object getRestrictDismissals();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>

---


### BranchProtectionRequiredStatusChecksList <a name="BranchProtectionRequiredStatusChecksList" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtectionRequiredStatusChecksList;

new BranchProtectionRequiredStatusChecksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get"></a>

```java
public BranchProtectionRequiredStatusChecksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>>

---


### BranchProtectionRequiredStatusChecksOutputReference <a name="BranchProtectionRequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.branch_protection.BranchProtectionRequiredStatusChecksOutputReference;

new BranchProtectionRequiredStatusChecksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts">resetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict">resetStrict</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContexts` <a name="resetContexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts"></a>

```java
public void resetContexts()
```

##### `resetStrict` <a name="resetStrict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict"></a>

```java
public void resetStrict()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput">contextsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput">strictInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts">contexts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict">strict</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextsInput`<sup>Optional</sup> <a name="contextsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput"></a>

```java
public java.util.List<java.lang.String> getContextsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `strictInput`<sup>Optional</sup> <a name="strictInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput"></a>

```java
public java.lang.Object getStrictInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contexts`<sup>Required</sup> <a name="contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts"></a>

```java
public java.util.List<java.lang.String> getContexts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict"></a>

```java
public java.lang.Object getStrict();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>

---



