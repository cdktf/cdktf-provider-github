# `github_branch_protection`

Refer to the Terraform Registory for docs: [`github_branch_protection`](https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection).

# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-github.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-github.branchProtection.BranchProtection"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection github_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pattern: str,
  repository_id: str,
  allows_deletions: typing.Union[bool, IResolvable] = None,
  allows_force_pushes: typing.Union[bool, IResolvable] = None,
  blocks_creations: typing.Union[bool, IResolvable] = None,
  enforce_admins: typing.Union[bool, IResolvable] = None,
  force_push_bypassers: typing.List[str] = None,
  id: str = None,
  lock_branch: typing.Union[bool, IResolvable] = None,
  push_restrictions: typing.List[str] = None,
  require_conversation_resolution: typing.Union[bool, IResolvable] = None,
  required_linear_history: typing.Union[bool, IResolvable] = None,
  required_pull_request_reviews: typing.Union[IResolvable, typing.List[BranchProtectionRequiredPullRequestReviews]] = None,
  required_status_checks: typing.Union[IResolvable, typing.List[BranchProtectionRequiredStatusChecks]] = None,
  require_signed_commits: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | Identifies the protection rule pattern. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | The name or node ID of the repository associated with this branch protection rule. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.allowsDeletions">allows_deletions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' to allow the branch to be deleted. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.allowsForcePushes">allows_force_pushes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' to allow force pushes on the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.blocksCreations">blocks_creations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' to block creating the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.enforceAdmins">enforce_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.forcePushBypassers">force_push_bypassers</a></code> | <code>typing.List[str]</code> | The list of actor Names/IDs that are allowed to bypass force push restrictions. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.lockBranch">lock_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' will make the branch read-only and preventing any pushes to it. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.pushRestrictions">push_restrictions</a></code> | <code>typing.List[str]</code> | The list of actor Names/IDs that may push to the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requireConversationResolution">require_conversation_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredLinearHistory">required_linear_history</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredPullRequestReviews">required_pull_request_reviews</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]</code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredStatusChecks">required_status_checks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]</code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requireSignedCommits">require_signed_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' requires all commits to be signed with GPG. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.pattern"></a>

- *Type:* str

Identifies the protection rule pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#pattern BranchProtection#pattern}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.repositoryId"></a>

- *Type:* str

The name or node ID of the repository associated with this branch protection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#repository_id BranchProtection#repository_id}

---

##### `allows_deletions`<sup>Optional</sup> <a name="allows_deletions" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.allowsDeletions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' to allow the branch to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#allows_deletions BranchProtection#allows_deletions}

---

##### `allows_force_pushes`<sup>Optional</sup> <a name="allows_force_pushes" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.allowsForcePushes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' to allow force pushes on the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}

---

##### `blocks_creations`<sup>Optional</sup> <a name="blocks_creations" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.blocksCreations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' to block creating the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#blocks_creations BranchProtection#blocks_creations}

---

##### `enforce_admins`<sup>Optional</sup> <a name="enforce_admins" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.enforceAdmins"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#enforce_admins BranchProtection#enforce_admins}

---

##### `force_push_bypassers`<sup>Optional</sup> <a name="force_push_bypassers" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.forcePushBypassers"></a>

- *Type:* typing.List[str]

The list of actor Names/IDs that are allowed to bypass force push restrictions.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#force_push_bypassers BranchProtection#force_push_bypassers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lock_branch`<sup>Optional</sup> <a name="lock_branch" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.lockBranch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' will make the branch read-only and preventing any pushes to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#lock_branch BranchProtection#lock_branch}

---

##### `push_restrictions`<sup>Optional</sup> <a name="push_restrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.pushRestrictions"></a>

- *Type:* typing.List[str]

The list of actor Names/IDs that may push to the branch.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#push_restrictions BranchProtection#push_restrictions}

---

##### `require_conversation_resolution`<sup>Optional</sup> <a name="require_conversation_resolution" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requireConversationResolution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}

---

##### `required_linear_history`<sup>Optional</sup> <a name="required_linear_history" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredLinearHistory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#required_linear_history BranchProtection#required_linear_history}

---

##### `required_pull_request_reviews`<sup>Optional</sup> <a name="required_pull_request_reviews" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredPullRequestReviews"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}

---

##### `required_status_checks`<sup>Optional</sup> <a name="required_status_checks" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requiredStatusChecks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#required_status_checks BranchProtection#required_status_checks}

---

##### `require_signed_commits`<sup>Optional</sup> <a name="require_signed_commits" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.requireSignedCommits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#require_signed_commits BranchProtection#require_signed_commits}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews">put_required_pull_request_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks">put_required_status_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsDeletions">reset_allows_deletions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes">reset_allows_force_pushes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetBlocksCreations">reset_blocks_creations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetEnforceAdmins">reset_enforce_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetForcePushBypassers">reset_force_push_bypassers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetLockBranch">reset_lock_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetPushRestrictions">reset_push_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution">reset_require_conversation_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory">reset_required_linear_history</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews">reset_required_pull_request_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks">reset_required_status_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits">reset_require_signed_commits</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtection.BranchProtection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.branchProtection.BranchProtection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.branchProtection.BranchProtection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.branchProtection.BranchProtection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.branchProtection.BranchProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-github.branchProtection.BranchProtection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtection.BranchProtection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.branchProtection.BranchProtection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.branchProtection.BranchProtection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.branchProtection.BranchProtection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_required_pull_request_reviews` <a name="put_required_pull_request_reviews" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews"></a>

```python
def put_required_pull_request_reviews(
  value: typing.Union[IResolvable, typing.List[BranchProtectionRequiredPullRequestReviews]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]

---

##### `put_required_status_checks` <a name="put_required_status_checks" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks"></a>

```python
def put_required_status_checks(
  value: typing.Union[IResolvable, typing.List[BranchProtectionRequiredStatusChecks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]

---

##### `reset_allows_deletions` <a name="reset_allows_deletions" id="@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsDeletions"></a>

```python
def reset_allows_deletions() -> None
```

##### `reset_allows_force_pushes` <a name="reset_allows_force_pushes" id="@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes"></a>

```python
def reset_allows_force_pushes() -> None
```

##### `reset_blocks_creations` <a name="reset_blocks_creations" id="@cdktf/provider-github.branchProtection.BranchProtection.resetBlocksCreations"></a>

```python
def reset_blocks_creations() -> None
```

##### `reset_enforce_admins` <a name="reset_enforce_admins" id="@cdktf/provider-github.branchProtection.BranchProtection.resetEnforceAdmins"></a>

```python
def reset_enforce_admins() -> None
```

##### `reset_force_push_bypassers` <a name="reset_force_push_bypassers" id="@cdktf/provider-github.branchProtection.BranchProtection.resetForcePushBypassers"></a>

```python
def reset_force_push_bypassers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.branchProtection.BranchProtection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lock_branch` <a name="reset_lock_branch" id="@cdktf/provider-github.branchProtection.BranchProtection.resetLockBranch"></a>

```python
def reset_lock_branch() -> None
```

##### `reset_push_restrictions` <a name="reset_push_restrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.resetPushRestrictions"></a>

```python
def reset_push_restrictions() -> None
```

##### `reset_require_conversation_resolution` <a name="reset_require_conversation_resolution" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution"></a>

```python
def reset_require_conversation_resolution() -> None
```

##### `reset_required_linear_history` <a name="reset_required_linear_history" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory"></a>

```python
def reset_required_linear_history() -> None
```

##### `reset_required_pull_request_reviews` <a name="reset_required_pull_request_reviews" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews"></a>

```python
def reset_required_pull_request_reviews() -> None
```

##### `reset_required_status_checks` <a name="reset_required_status_checks" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks"></a>

```python
def reset_required_status_checks() -> None
```

##### `reset_require_signed_commits` <a name="reset_require_signed_commits" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits"></a>

```python
def reset_require_signed_commits() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.branchProtection.BranchProtection.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtection.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.branchProtection.BranchProtection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtection.BranchProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.branchProtection.BranchProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BranchProtection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.branchProtection.BranchProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BranchProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtection.BranchProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BranchProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews">required_pull_request_reviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks">required_status_checks</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput">allows_deletions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput">allows_force_pushes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreationsInput">blocks_creations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput">enforce_admins_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.forcePushBypassersInput">force_push_bypassers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranchInput">lock_branch_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictionsInput">push_restrictions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput">require_conversation_resolution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput">required_linear_history_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput">required_pull_request_reviews_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput">required_status_checks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput">require_signed_commits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletions">allows_deletions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushes">allows_force_pushes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreations">blocks_creations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdmins">enforce_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.forcePushBypassers">force_push_bypassers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranch">lock_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictions">push_restrictions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolution">require_conversation_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory">required_linear_history</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommits">require_signed_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.branchProtection.BranchProtection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.branchProtection.BranchProtection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtection.BranchProtection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtection.BranchProtection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.branchProtection.BranchProtection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.branchProtection.BranchProtection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtection.BranchProtection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtection.BranchProtection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `required_pull_request_reviews`<sup>Required</sup> <a name="required_pull_request_reviews" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews"></a>

```python
required_pull_request_reviews: BranchProtectionRequiredPullRequestReviewsList
```

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a>

---

##### `required_status_checks`<sup>Required</sup> <a name="required_status_checks" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks"></a>

```python
required_status_checks: BranchProtectionRequiredStatusChecksList
```

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a>

---

##### `allows_deletions_input`<sup>Optional</sup> <a name="allows_deletions_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput"></a>

```python
allows_deletions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allows_force_pushes_input`<sup>Optional</sup> <a name="allows_force_pushes_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput"></a>

```python
allows_force_pushes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blocks_creations_input`<sup>Optional</sup> <a name="blocks_creations_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreationsInput"></a>

```python
blocks_creations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_admins_input`<sup>Optional</sup> <a name="enforce_admins_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput"></a>

```python
enforce_admins_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_push_bypassers_input`<sup>Optional</sup> <a name="force_push_bypassers_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.forcePushBypassersInput"></a>

```python
force_push_bypassers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lock_branch_input`<sup>Optional</sup> <a name="lock_branch_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranchInput"></a>

```python
lock_branch_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `push_restrictions_input`<sup>Optional</sup> <a name="push_restrictions_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictionsInput"></a>

```python
push_restrictions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `require_conversation_resolution_input`<sup>Optional</sup> <a name="require_conversation_resolution_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput"></a>

```python
require_conversation_resolution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_linear_history_input`<sup>Optional</sup> <a name="required_linear_history_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput"></a>

```python
required_linear_history_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_pull_request_reviews_input`<sup>Optional</sup> <a name="required_pull_request_reviews_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput"></a>

```python
required_pull_request_reviews_input: typing.Union[IResolvable, typing.List[BranchProtectionRequiredPullRequestReviews]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]

---

##### `required_status_checks_input`<sup>Optional</sup> <a name="required_status_checks_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput"></a>

```python
required_status_checks_input: typing.Union[IResolvable, typing.List[BranchProtectionRequiredStatusChecks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]

---

##### `require_signed_commits_input`<sup>Optional</sup> <a name="require_signed_commits_input" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput"></a>

```python
require_signed_commits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allows_deletions`<sup>Required</sup> <a name="allows_deletions" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletions"></a>

```python
allows_deletions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allows_force_pushes`<sup>Required</sup> <a name="allows_force_pushes" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushes"></a>

```python
allows_force_pushes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blocks_creations`<sup>Required</sup> <a name="blocks_creations" id="@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreations"></a>

```python
blocks_creations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_admins`<sup>Required</sup> <a name="enforce_admins" id="@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdmins"></a>

```python
enforce_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_push_bypassers`<sup>Required</sup> <a name="force_push_bypassers" id="@cdktf/provider-github.branchProtection.BranchProtection.property.forcePushBypassers"></a>

```python
force_push_bypassers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lock_branch`<sup>Required</sup> <a name="lock_branch" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranch"></a>

```python
lock_branch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `push_restrictions`<sup>Required</sup> <a name="push_restrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictions"></a>

```python
push_restrictions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `require_conversation_resolution`<sup>Required</sup> <a name="require_conversation_resolution" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolution"></a>

```python
require_conversation_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_linear_history`<sup>Required</sup> <a name="required_linear_history" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory"></a>

```python
required_linear_history: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_signed_commits`<sup>Required</sup> <a name="require_signed_commits" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommits"></a>

```python
require_signed_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.branchProtection.BranchProtection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pattern: str,
  repository_id: str,
  allows_deletions: typing.Union[bool, IResolvable] = None,
  allows_force_pushes: typing.Union[bool, IResolvable] = None,
  blocks_creations: typing.Union[bool, IResolvable] = None,
  enforce_admins: typing.Union[bool, IResolvable] = None,
  force_push_bypassers: typing.List[str] = None,
  id: str = None,
  lock_branch: typing.Union[bool, IResolvable] = None,
  push_restrictions: typing.List[str] = None,
  require_conversation_resolution: typing.Union[bool, IResolvable] = None,
  required_linear_history: typing.Union[bool, IResolvable] = None,
  required_pull_request_reviews: typing.Union[IResolvable, typing.List[BranchProtectionRequiredPullRequestReviews]] = None,
  required_status_checks: typing.Union[IResolvable, typing.List[BranchProtectionRequiredStatusChecks]] = None,
  require_signed_commits: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pattern">pattern</a></code> | <code>str</code> | Identifies the protection rule pattern. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | The name or node ID of the repository associated with this branch protection rule. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions">allows_deletions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' to allow the branch to be deleted. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes">allows_force_pushes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' to allow force pushes on the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.blocksCreations">blocks_creations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' to block creating the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins">enforce_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forcePushBypassers">force_push_bypassers</a></code> | <code>typing.List[str]</code> | The list of actor Names/IDs that are allowed to bypass force push restrictions. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch">lock_branch</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' will make the branch read-only and preventing any pushes to it. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pushRestrictions">push_restrictions</a></code> | <code>typing.List[str]</code> | The list of actor Names/IDs that may push to the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution">require_conversation_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory">required_linear_history</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews">required_pull_request_reviews</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]</code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks">required_status_checks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]</code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits">require_signed_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' requires all commits to be signed with GPG. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Identifies the protection rule pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#pattern BranchProtection#pattern}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

The name or node ID of the repository associated with this branch protection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#repository_id BranchProtection#repository_id}

---

##### `allows_deletions`<sup>Optional</sup> <a name="allows_deletions" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions"></a>

```python
allows_deletions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' to allow the branch to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#allows_deletions BranchProtection#allows_deletions}

---

##### `allows_force_pushes`<sup>Optional</sup> <a name="allows_force_pushes" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes"></a>

```python
allows_force_pushes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' to allow force pushes on the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}

---

##### `blocks_creations`<sup>Optional</sup> <a name="blocks_creations" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.blocksCreations"></a>

```python
blocks_creations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' to block creating the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#blocks_creations BranchProtection#blocks_creations}

---

##### `enforce_admins`<sup>Optional</sup> <a name="enforce_admins" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins"></a>

```python
enforce_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#enforce_admins BranchProtection#enforce_admins}

---

##### `force_push_bypassers`<sup>Optional</sup> <a name="force_push_bypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forcePushBypassers"></a>

```python
force_push_bypassers: typing.List[str]
```

- *Type:* typing.List[str]

The list of actor Names/IDs that are allowed to bypass force push restrictions.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#force_push_bypassers BranchProtection#force_push_bypassers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lock_branch`<sup>Optional</sup> <a name="lock_branch" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch"></a>

```python
lock_branch: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' will make the branch read-only and preventing any pushes to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#lock_branch BranchProtection#lock_branch}

---

##### `push_restrictions`<sup>Optional</sup> <a name="push_restrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pushRestrictions"></a>

```python
push_restrictions: typing.List[str]
```

- *Type:* typing.List[str]

The list of actor Names/IDs that may push to the branch.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#push_restrictions BranchProtection#push_restrictions}

---

##### `require_conversation_resolution`<sup>Optional</sup> <a name="require_conversation_resolution" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution"></a>

```python
require_conversation_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}

---

##### `required_linear_history`<sup>Optional</sup> <a name="required_linear_history" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory"></a>

```python
required_linear_history: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#required_linear_history BranchProtection#required_linear_history}

---

##### `required_pull_request_reviews`<sup>Optional</sup> <a name="required_pull_request_reviews" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews"></a>

```python
required_pull_request_reviews: typing.Union[IResolvable, typing.List[BranchProtectionRequiredPullRequestReviews]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}

---

##### `required_status_checks`<sup>Optional</sup> <a name="required_status_checks" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks"></a>

```python
required_status_checks: typing.Union[IResolvable, typing.List[BranchProtectionRequiredStatusChecks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#required_status_checks BranchProtection#required_status_checks}

---

##### `require_signed_commits`<sup>Optional</sup> <a name="require_signed_commits" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits"></a>

```python
require_signed_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#require_signed_commits BranchProtection#require_signed_commits}

---

### BranchProtectionRequiredPullRequestReviews <a name="BranchProtectionRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtectionRequiredPullRequestReviews(
  dismissal_restrictions: typing.List[str] = None,
  dismiss_stale_reviews: typing.Union[bool, IResolvable] = None,
  pull_request_bypassers: typing.List[str] = None,
  require_code_owner_reviews: typing.Union[bool, IResolvable] = None,
  required_approving_review_count: typing.Union[int, float] = None,
  require_last_push_approval: typing.Union[bool, IResolvable] = None,
  restrict_dismissals: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions">dismissal_restrictions</a></code> | <code>typing.List[str]</code> | The list of actor Names/IDs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews">dismiss_stale_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers">pull_request_bypassers</a></code> | <code>typing.List[str]</code> | The list of actor Names/IDs that are allowed to bypass pull request requirements. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews">require_code_owner_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount">required_approving_review_count</a></code> | <code>typing.Union[int, float]</code> | Require 'x' number of approvals to satisfy branch protection requirements. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval">require_last_push_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require that The most recent push must be approved by someone other than the last pusher. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals">restrict_dismissals</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Restrict pull request review dismissals. |

---

##### `dismissal_restrictions`<sup>Optional</sup> <a name="dismissal_restrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions"></a>

```python
dismissal_restrictions: typing.List[str]
```

- *Type:* typing.List[str]

The list of actor Names/IDs with dismissal access.

If not empty, 'restrict_dismissals' is ignored. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#dismissal_restrictions BranchProtection#dismissal_restrictions}

---

##### `dismiss_stale_reviews`<sup>Optional</sup> <a name="dismiss_stale_reviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews"></a>

```python
dismiss_stale_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}

---

##### `pull_request_bypassers`<sup>Optional</sup> <a name="pull_request_bypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers"></a>

```python
pull_request_bypassers: typing.List[str]
```

- *Type:* typing.List[str]

The list of actor Names/IDs that are allowed to bypass pull request requirements.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#pull_request_bypassers BranchProtection#pull_request_bypassers}

---

##### `require_code_owner_reviews`<sup>Optional</sup> <a name="require_code_owner_reviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```python
require_code_owner_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#require_code_owner_reviews BranchProtection#require_code_owner_reviews}

---

##### `required_approving_review_count`<sup>Optional</sup> <a name="required_approving_review_count" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```python
required_approving_review_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#required_approving_review_count BranchProtection#required_approving_review_count}

---

##### `require_last_push_approval`<sup>Optional</sup> <a name="require_last_push_approval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval"></a>

```python
require_last_push_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require that The most recent push must be approved by someone other than the last pusher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#require_last_push_approval BranchProtection#require_last_push_approval}

---

##### `restrict_dismissals`<sup>Optional</sup> <a name="restrict_dismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals"></a>

```python
restrict_dismissals: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Restrict pull request review dismissals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#restrict_dismissals BranchProtection#restrict_dismissals}

---

### BranchProtectionRequiredStatusChecks <a name="BranchProtectionRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtectionRequiredStatusChecks(
  contexts: typing.List[str] = None,
  strict: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts">contexts</a></code> | <code>typing.List[str]</code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict">strict</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require branches to be up to date before merging. |

---

##### `contexts`<sup>Optional</sup> <a name="contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts"></a>

```python
contexts: typing.List[str]
```

- *Type:* typing.List[str]

The list of status checks to require in order to merge into this branch.

No status checks are required by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#contexts BranchProtection#contexts}

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict"></a>

```python
strict: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/branch_protection#strict BranchProtection#strict}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionRequiredPullRequestReviewsList <a name="BranchProtectionRequiredPullRequestReviewsList" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtectionRequiredPullRequestReviewsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BranchProtectionRequiredPullRequestReviewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BranchProtectionRequiredPullRequestReviews]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]]

---


### BranchProtectionRequiredPullRequestReviewsOutputReference <a name="BranchProtectionRequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions">reset_dismissal_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">reset_dismiss_stale_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers">reset_pull_request_bypassers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">reset_require_code_owner_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">reset_required_approving_review_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval">reset_require_last_push_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals">reset_restrict_dismissals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dismissal_restrictions` <a name="reset_dismissal_restrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions"></a>

```python
def reset_dismissal_restrictions() -> None
```

##### `reset_dismiss_stale_reviews` <a name="reset_dismiss_stale_reviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```python
def reset_dismiss_stale_reviews() -> None
```

##### `reset_pull_request_bypassers` <a name="reset_pull_request_bypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers"></a>

```python
def reset_pull_request_bypassers() -> None
```

##### `reset_require_code_owner_reviews` <a name="reset_require_code_owner_reviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```python
def reset_require_code_owner_reviews() -> None
```

##### `reset_required_approving_review_count` <a name="reset_required_approving_review_count" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```python
def reset_required_approving_review_count() -> None
```

##### `reset_require_last_push_approval` <a name="reset_require_last_push_approval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval"></a>

```python
def reset_require_last_push_approval() -> None
```

##### `reset_restrict_dismissals` <a name="reset_restrict_dismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals"></a>

```python
def reset_restrict_dismissals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput">dismissal_restrictions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">dismiss_stale_reviews_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput">pull_request_bypassers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">require_code_owner_reviews_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">required_approving_review_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput">require_last_push_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput">restrict_dismissals_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions">dismissal_restrictions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">dismiss_stale_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers">pull_request_bypassers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">require_code_owner_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">required_approving_review_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval">require_last_push_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals">restrict_dismissals</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dismissal_restrictions_input`<sup>Optional</sup> <a name="dismissal_restrictions_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput"></a>

```python
dismissal_restrictions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dismiss_stale_reviews_input`<sup>Optional</sup> <a name="dismiss_stale_reviews_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```python
dismiss_stale_reviews_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pull_request_bypassers_input`<sup>Optional</sup> <a name="pull_request_bypassers_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput"></a>

```python
pull_request_bypassers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_code_owner_reviews_input`<sup>Optional</sup> <a name="require_code_owner_reviews_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```python
require_code_owner_reviews_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_approving_review_count_input`<sup>Optional</sup> <a name="required_approving_review_count_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```python
required_approving_review_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_last_push_approval_input`<sup>Optional</sup> <a name="require_last_push_approval_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput"></a>

```python
require_last_push_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_dismissals_input`<sup>Optional</sup> <a name="restrict_dismissals_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput"></a>

```python
restrict_dismissals_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dismissal_restrictions`<sup>Required</sup> <a name="dismissal_restrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions"></a>

```python
dismissal_restrictions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dismiss_stale_reviews`<sup>Required</sup> <a name="dismiss_stale_reviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```python
dismiss_stale_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pull_request_bypassers`<sup>Required</sup> <a name="pull_request_bypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers"></a>

```python
pull_request_bypassers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_code_owner_reviews`<sup>Required</sup> <a name="require_code_owner_reviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```python
require_code_owner_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_approving_review_count`<sup>Required</sup> <a name="required_approving_review_count" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```python
required_approving_review_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_last_push_approval`<sup>Required</sup> <a name="require_last_push_approval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval"></a>

```python
require_last_push_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_dismissals`<sup>Required</sup> <a name="restrict_dismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals"></a>

```python
restrict_dismissals: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BranchProtectionRequiredPullRequestReviews]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews">BranchProtectionRequiredPullRequestReviews</a>]

---


### BranchProtectionRequiredStatusChecksList <a name="BranchProtectionRequiredStatusChecksList" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtectionRequiredStatusChecksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BranchProtectionRequiredStatusChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BranchProtectionRequiredStatusChecks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]]

---


### BranchProtectionRequiredStatusChecksOutputReference <a name="BranchProtectionRequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection

branchProtection.BranchProtectionRequiredStatusChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts">reset_contexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict">reset_strict</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contexts` <a name="reset_contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts"></a>

```python
def reset_contexts() -> None
```

##### `reset_strict` <a name="reset_strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict"></a>

```python
def reset_strict() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput">contexts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput">strict_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts">contexts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict">strict</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contexts_input`<sup>Optional</sup> <a name="contexts_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput"></a>

```python
contexts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `strict_input`<sup>Optional</sup> <a name="strict_input" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput"></a>

```python
strict_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contexts`<sup>Required</sup> <a name="contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts"></a>

```python
contexts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict"></a>

```python
strict: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BranchProtectionRequiredStatusChecks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks">BranchProtectionRequiredStatusChecks</a>]

---



