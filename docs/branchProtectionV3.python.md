# `github_branch_protection_v3`

Refer to the Terraform Registory for docs: [`github_branch_protection_v3`](https://www.terraform.io/docs/providers/github/r/branch_protection_v3).

# `branchProtectionV3` Submodule <a name="`branchProtectionV3` Submodule" id="@cdktf/provider-github.branchProtectionV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtectionV3 <a name="BranchProtectionV3" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3 github_branch_protection_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  branch: str,
  repository: str,
  enforce_admins: typing.Union[bool, IResolvable] = None,
  id: str = None,
  require_conversation_resolution: typing.Union[bool, IResolvable] = None,
  required_pull_request_reviews: BranchProtectionV3RequiredPullRequestReviews = None,
  required_status_checks: BranchProtectionV3RequiredStatusChecks = None,
  require_signed_commits: typing.Union[bool, IResolvable] = None,
  restrictions: BranchProtectionV3Restrictions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.branch">branch</a></code> | <code>str</code> | The Git branch to protect. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.enforceAdmins">enforce_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requireConversationResolution">require_conversation_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requiredPullRequestReviews">required_pull_request_reviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requiredStatusChecks">required_status_checks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requireSignedCommits">require_signed_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' requires all commits to be signed with GPG. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | restrictions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.branch"></a>

- *Type:* str

The Git branch to protect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#branch BranchProtectionV3#branch}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.repository"></a>

- *Type:* str

The GitHub repository name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#repository BranchProtectionV3#repository}

---

##### `enforce_admins`<sup>Optional</sup> <a name="enforce_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.enforceAdmins"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `require_conversation_resolution`<sup>Optional</sup> <a name="require_conversation_resolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requireConversationResolution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}

---

##### `required_pull_request_reviews`<sup>Optional</sup> <a name="required_pull_request_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requiredPullRequestReviews"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}

---

##### `required_status_checks`<sup>Optional</sup> <a name="required_status_checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requiredStatusChecks"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}

---

##### `require_signed_commits`<sup>Optional</sup> <a name="require_signed_commits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.requireSignedCommits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.restrictions"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#restrictions BranchProtectionV3#restrictions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews">put_required_pull_request_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks">put_required_status_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions">put_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins">reset_enforce_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution">reset_require_conversation_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews">reset_required_pull_request_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks">reset_required_status_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits">reset_require_signed_commits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions">reset_restrictions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_required_pull_request_reviews` <a name="put_required_pull_request_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews"></a>

```python
def put_required_pull_request_reviews(
  bypass_pull_request_allowances: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances = None,
  dismissal_teams: typing.List[str] = None,
  dismissal_users: typing.List[str] = None,
  dismiss_stale_reviews: typing.Union[bool, IResolvable] = None,
  include_admins: typing.Union[bool, IResolvable] = None,
  require_code_owner_reviews: typing.Union[bool, IResolvable] = None,
  required_approving_review_count: typing.Union[int, float] = None
) -> None
```

###### `bypass_pull_request_allowances`<sup>Optional</sup> <a name="bypass_pull_request_allowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.bypassPullRequestAllowances"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

bypass_pull_request_allowances block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#bypass_pull_request_allowances BranchProtectionV3#bypass_pull_request_allowances}

---

###### `dismissal_teams`<sup>Optional</sup> <a name="dismissal_teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.dismissalTeams"></a>

- *Type:* typing.List[str]

The list of team slugs with dismissal access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_teams BranchProtectionV3#dismissal_teams}

---

###### `dismissal_users`<sup>Optional</sup> <a name="dismissal_users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.dismissalUsers"></a>

- *Type:* typing.List[str]

The list of user logins with dismissal access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_users BranchProtectionV3#dismissal_users}

---

###### `dismiss_stale_reviews`<sup>Optional</sup> <a name="dismiss_stale_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.dismissStaleReviews"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}

---

###### `include_admins`<sup>Optional</sup> <a name="include_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.includeAdmins"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

###### `require_code_owner_reviews`<sup>Optional</sup> <a name="require_code_owner_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.requireCodeOwnerReviews"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}

---

###### `required_approving_review_count`<sup>Optional</sup> <a name="required_approving_review_count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.requiredApprovingReviewCount"></a>

- *Type:* typing.Union[int, float]

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_approving_review_count BranchProtectionV3#required_approving_review_count}

---

##### `put_required_status_checks` <a name="put_required_status_checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks"></a>

```python
def put_required_status_checks(
  checks: typing.List[str] = None,
  contexts: typing.List[str] = None,
  include_admins: typing.Union[bool, IResolvable] = None,
  strict: typing.Union[bool, IResolvable] = None
) -> None
```

###### `checks`<sup>Optional</sup> <a name="checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks.parameter.checks"></a>

- *Type:* typing.List[str]

The list of status checks to require in order to merge into this branch.

No status checks are required by default. Checks should be strings containing the 'context' and 'app_id' like so 'context:app_id'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#checks BranchProtectionV3#checks}

---

###### `contexts`<sup>Optional</sup> <a name="contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks.parameter.contexts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}.

---

###### `include_admins`<sup>Optional</sup> <a name="include_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks.parameter.includeAdmins"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

###### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks.parameter.strict"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#strict BranchProtectionV3#strict}

---

##### `put_restrictions` <a name="put_restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions"></a>

```python
def put_restrictions(
  apps: typing.List[str] = None,
  teams: typing.List[str] = None,
  users: typing.List[str] = None
) -> None
```

###### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions.parameter.apps"></a>

- *Type:* typing.List[str]

The list of app slugs with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}

---

###### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions.parameter.teams"></a>

- *Type:* typing.List[str]

The list of team slugs with push access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}

---

###### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions.parameter.users"></a>

- *Type:* typing.List[str]

The list of user logins with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}

---

##### `reset_enforce_admins` <a name="reset_enforce_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins"></a>

```python
def reset_enforce_admins() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_require_conversation_resolution` <a name="reset_require_conversation_resolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution"></a>

```python
def reset_require_conversation_resolution() -> None
```

##### `reset_required_pull_request_reviews` <a name="reset_required_pull_request_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews"></a>

```python
def reset_required_pull_request_reviews() -> None
```

##### `reset_required_status_checks` <a name="reset_required_status_checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks"></a>

```python
def reset_required_status_checks() -> None
```

##### `reset_require_signed_commits` <a name="reset_require_signed_commits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits"></a>

```python
def reset_require_signed_commits() -> None
```

##### `reset_restrictions` <a name="reset_restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions"></a>

```python
def reset_restrictions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews">required_pull_request_reviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks">required_status_checks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput">enforce_admins_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput">require_conversation_resolution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput">required_pull_request_reviews_input</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput">required_status_checks_input</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput">require_signed_commits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput">restrictions_input</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins">enforce_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution">require_conversation_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits">require_signed_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `required_pull_request_reviews`<sup>Required</sup> <a name="required_pull_request_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews"></a>

```python
required_pull_request_reviews: BranchProtectionV3RequiredPullRequestReviewsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a>

---

##### `required_status_checks`<sup>Required</sup> <a name="required_status_checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks"></a>

```python
required_status_checks: BranchProtectionV3RequiredStatusChecksOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a>

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions"></a>

```python
restrictions: BranchProtectionV3RestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a>

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `enforce_admins_input`<sup>Optional</sup> <a name="enforce_admins_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput"></a>

```python
enforce_admins_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `require_conversation_resolution_input`<sup>Optional</sup> <a name="require_conversation_resolution_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput"></a>

```python
require_conversation_resolution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_pull_request_reviews_input`<sup>Optional</sup> <a name="required_pull_request_reviews_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput"></a>

```python
required_pull_request_reviews_input: BranchProtectionV3RequiredPullRequestReviews
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `required_status_checks_input`<sup>Optional</sup> <a name="required_status_checks_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput"></a>

```python
required_status_checks_input: BranchProtectionV3RequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `require_signed_commits_input`<sup>Optional</sup> <a name="require_signed_commits_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput"></a>

```python
require_signed_commits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrictions_input`<sup>Optional</sup> <a name="restrictions_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput"></a>

```python
restrictions_input: BranchProtectionV3Restrictions
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `enforce_admins`<sup>Required</sup> <a name="enforce_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins"></a>

```python
enforce_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `require_conversation_resolution`<sup>Required</sup> <a name="require_conversation_resolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution"></a>

```python
require_conversation_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_signed_commits`<sup>Required</sup> <a name="require_signed_commits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits"></a>

```python
require_signed_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionV3Config <a name="BranchProtectionV3Config" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  branch: str,
  repository: str,
  enforce_admins: typing.Union[bool, IResolvable] = None,
  id: str = None,
  require_conversation_resolution: typing.Union[bool, IResolvable] = None,
  required_pull_request_reviews: BranchProtectionV3RequiredPullRequestReviews = None,
  required_status_checks: BranchProtectionV3RequiredStatusChecks = None,
  require_signed_commits: typing.Union[bool, IResolvable] = None,
  restrictions: BranchProtectionV3Restrictions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch">branch</a></code> | <code>str</code> | The Git branch to protect. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository">repository</a></code> | <code>str</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins">enforce_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution">require_conversation_resolution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews">required_pull_request_reviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks">required_status_checks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits">require_signed_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Setting this to 'true' requires all commits to be signed with GPG. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | restrictions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch"></a>

```python
branch: str
```

- *Type:* str

The Git branch to protect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#branch BranchProtectionV3#branch}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository"></a>

```python
repository: str
```

- *Type:* str

The GitHub repository name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#repository BranchProtectionV3#repository}

---

##### `enforce_admins`<sup>Optional</sup> <a name="enforce_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins"></a>

```python
enforce_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `require_conversation_resolution`<sup>Optional</sup> <a name="require_conversation_resolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution"></a>

```python
require_conversation_resolution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}

---

##### `required_pull_request_reviews`<sup>Optional</sup> <a name="required_pull_request_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews"></a>

```python
required_pull_request_reviews: BranchProtectionV3RequiredPullRequestReviews
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}

---

##### `required_status_checks`<sup>Optional</sup> <a name="required_status_checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks"></a>

```python
required_status_checks: BranchProtectionV3RequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}

---

##### `require_signed_commits`<sup>Optional</sup> <a name="require_signed_commits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits"></a>

```python
require_signed_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions"></a>

```python
restrictions: BranchProtectionV3Restrictions
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#restrictions BranchProtectionV3#restrictions}

---

### BranchProtectionV3RequiredPullRequestReviews <a name="BranchProtectionV3RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews(
  bypass_pull_request_allowances: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances = None,
  dismissal_teams: typing.List[str] = None,
  dismissal_users: typing.List[str] = None,
  dismiss_stale_reviews: typing.Union[bool, IResolvable] = None,
  include_admins: typing.Union[bool, IResolvable] = None,
  require_code_owner_reviews: typing.Union[bool, IResolvable] = None,
  required_approving_review_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances">bypass_pull_request_allowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | bypass_pull_request_allowances block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams">dismissal_teams</a></code> | <code>typing.List[str]</code> | The list of team slugs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers">dismissal_users</a></code> | <code>typing.List[str]</code> | The list of user logins with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews">dismiss_stale_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins">include_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews">require_code_owner_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount">required_approving_review_count</a></code> | <code>typing.Union[int, float]</code> | Require 'x' number of approvals to satisfy branch protection requirements. |

---

##### `bypass_pull_request_allowances`<sup>Optional</sup> <a name="bypass_pull_request_allowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances"></a>

```python
bypass_pull_request_allowances: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

bypass_pull_request_allowances block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#bypass_pull_request_allowances BranchProtectionV3#bypass_pull_request_allowances}

---

##### `dismissal_teams`<sup>Optional</sup> <a name="dismissal_teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams"></a>

```python
dismissal_teams: typing.List[str]
```

- *Type:* typing.List[str]

The list of team slugs with dismissal access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_teams BranchProtectionV3#dismissal_teams}

---

##### `dismissal_users`<sup>Optional</sup> <a name="dismissal_users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers"></a>

```python
dismissal_users: typing.List[str]
```

- *Type:* typing.List[str]

The list of user logins with dismissal access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_users BranchProtectionV3#dismissal_users}

---

##### `dismiss_stale_reviews`<sup>Optional</sup> <a name="dismiss_stale_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews"></a>

```python
dismiss_stale_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}

---

##### `include_admins`<sup>Optional</sup> <a name="include_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins"></a>

```python
include_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `require_code_owner_reviews`<sup>Optional</sup> <a name="require_code_owner_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```python
require_code_owner_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}

---

##### `required_approving_review_count`<sup>Optional</sup> <a name="required_approving_review_count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```python
required_approving_review_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_approving_review_count BranchProtectionV3#required_approving_review_count}

---

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances(
  apps: typing.List[str] = None,
  teams: typing.List[str] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps">apps</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users">users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}. |

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps"></a>

```python
apps: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}.

---

### BranchProtectionV3RequiredStatusChecks <a name="BranchProtectionV3RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3RequiredStatusChecks(
  checks: typing.List[str] = None,
  contexts: typing.List[str] = None,
  include_admins: typing.Union[bool, IResolvable] = None,
  strict: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks">checks</a></code> | <code>typing.List[str]</code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts">contexts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins">include_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict">strict</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require branches to be up to date before merging. |

---

##### `checks`<sup>Optional</sup> <a name="checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks"></a>

```python
checks: typing.List[str]
```

- *Type:* typing.List[str]

The list of status checks to require in order to merge into this branch.

No status checks are required by default. Checks should be strings containing the 'context' and 'app_id' like so 'context:app_id'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#checks BranchProtectionV3#checks}

---

##### `contexts`<sup>Optional</sup> <a name="contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts"></a>

```python
contexts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}.

---

##### `include_admins`<sup>Optional</sup> <a name="include_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins"></a>

```python
include_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict"></a>

```python
strict: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#strict BranchProtectionV3#strict}

---

### BranchProtectionV3Restrictions <a name="BranchProtectionV3Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3Restrictions(
  apps: typing.List[str] = None,
  teams: typing.List[str] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps">apps</a></code> | <code>typing.List[str]</code> | The list of app slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams">teams</a></code> | <code>typing.List[str]</code> | The list of team slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users">users</a></code> | <code>typing.List[str]</code> | The list of user logins with push access. |

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps"></a>

```python
apps: typing.List[str]
```

- *Type:* typing.List[str]

The list of app slugs with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

The list of team slugs with push access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

The list of user logins with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps">reset_apps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams">reset_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apps` <a name="reset_apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps"></a>

```python
def reset_apps() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput">apps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps">apps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apps_input`<sup>Optional</sup> <a name="apps_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput"></a>

```python
apps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps"></a>

```python
apps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue"></a>

```python
internal_value: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---


### BranchProtectionV3RequiredPullRequestReviewsOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances">put_bypass_pull_request_allowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances">reset_bypass_pull_request_allowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams">reset_dismissal_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers">reset_dismissal_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">reset_dismiss_stale_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins">reset_include_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">reset_require_code_owner_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">reset_required_approving_review_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bypass_pull_request_allowances` <a name="put_bypass_pull_request_allowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances"></a>

```python
def put_bypass_pull_request_allowances(
  apps: typing.List[str] = None,
  teams: typing.List[str] = None,
  users: typing.List[str] = None
) -> None
```

###### `apps`<sup>Optional</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances.parameter.apps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}.

---

###### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances.parameter.teams"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}.

---

###### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances.parameter.users"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}.

---

##### `reset_bypass_pull_request_allowances` <a name="reset_bypass_pull_request_allowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances"></a>

```python
def reset_bypass_pull_request_allowances() -> None
```

##### `reset_dismissal_teams` <a name="reset_dismissal_teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams"></a>

```python
def reset_dismissal_teams() -> None
```

##### `reset_dismissal_users` <a name="reset_dismissal_users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers"></a>

```python
def reset_dismissal_users() -> None
```

##### `reset_dismiss_stale_reviews` <a name="reset_dismiss_stale_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```python
def reset_dismiss_stale_reviews() -> None
```

##### `reset_include_admins` <a name="reset_include_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins"></a>

```python
def reset_include_admins() -> None
```

##### `reset_require_code_owner_reviews` <a name="reset_require_code_owner_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```python
def reset_require_code_owner_reviews() -> None
```

##### `reset_required_approving_review_count` <a name="reset_required_approving_review_count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```python
def reset_required_approving_review_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances">bypass_pull_request_allowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput">bypass_pull_request_allowances_input</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput">dismissal_teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput">dismissal_users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">dismiss_stale_reviews_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput">include_admins_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">require_code_owner_reviews_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">required_approving_review_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams">dismissal_teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers">dismissal_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">dismiss_stale_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins">include_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">require_code_owner_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">required_approving_review_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypass_pull_request_allowances`<sup>Required</sup> <a name="bypass_pull_request_allowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances"></a>

```python
bypass_pull_request_allowances: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a>

---

##### `bypass_pull_request_allowances_input`<sup>Optional</sup> <a name="bypass_pull_request_allowances_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput"></a>

```python
bypass_pull_request_allowances_input: BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `dismissal_teams_input`<sup>Optional</sup> <a name="dismissal_teams_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput"></a>

```python
dismissal_teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dismissal_users_input`<sup>Optional</sup> <a name="dismissal_users_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput"></a>

```python
dismissal_users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dismiss_stale_reviews_input`<sup>Optional</sup> <a name="dismiss_stale_reviews_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```python
dismiss_stale_reviews_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_admins_input`<sup>Optional</sup> <a name="include_admins_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput"></a>

```python
include_admins_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_code_owner_reviews_input`<sup>Optional</sup> <a name="require_code_owner_reviews_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```python
require_code_owner_reviews_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_approving_review_count_input`<sup>Optional</sup> <a name="required_approving_review_count_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```python
required_approving_review_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dismissal_teams`<sup>Required</sup> <a name="dismissal_teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams"></a>

```python
dismissal_teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dismissal_users`<sup>Required</sup> <a name="dismissal_users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers"></a>

```python
dismissal_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dismiss_stale_reviews`<sup>Required</sup> <a name="dismiss_stale_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```python
dismiss_stale_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_admins`<sup>Required</sup> <a name="include_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins"></a>

```python
include_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_code_owner_reviews`<sup>Required</sup> <a name="require_code_owner_reviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```python
require_code_owner_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_approving_review_count`<sup>Required</sup> <a name="required_approving_review_count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```python
required_approving_review_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```python
internal_value: BranchProtectionV3RequiredPullRequestReviews
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---


### BranchProtectionV3RequiredStatusChecksOutputReference <a name="BranchProtectionV3RequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks">reset_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts">reset_contexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins">reset_include_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict">reset_strict</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_checks` <a name="reset_checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks"></a>

```python
def reset_checks() -> None
```

##### `reset_contexts` <a name="reset_contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts"></a>

```python
def reset_contexts() -> None
```

##### `reset_include_admins` <a name="reset_include_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins"></a>

```python
def reset_include_admins() -> None
```

##### `reset_strict` <a name="reset_strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict"></a>

```python
def reset_strict() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput">checks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput">contexts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput">include_admins_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput">strict_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks">checks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts">contexts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins">include_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict">strict</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `checks_input`<sup>Optional</sup> <a name="checks_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput"></a>

```python
checks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contexts_input`<sup>Optional</sup> <a name="contexts_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput"></a>

```python
contexts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_admins_input`<sup>Optional</sup> <a name="include_admins_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput"></a>

```python
include_admins_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_input`<sup>Optional</sup> <a name="strict_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput"></a>

```python
strict_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks"></a>

```python
checks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contexts`<sup>Required</sup> <a name="contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts"></a>

```python
contexts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_admins`<sup>Required</sup> <a name="include_admins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins"></a>

```python
include_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict"></a>

```python
strict: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue"></a>

```python
internal_value: BranchProtectionV3RequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---


### BranchProtectionV3RestrictionsOutputReference <a name="BranchProtectionV3RestrictionsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import branch_protection_v3

branchProtectionV3.BranchProtectionV3RestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps">reset_apps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams">reset_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apps` <a name="reset_apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps"></a>

```python
def reset_apps() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput">apps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps">apps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apps_input`<sup>Optional</sup> <a name="apps_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput"></a>

```python
apps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps"></a>

```python
apps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: BranchProtectionV3Restrictions
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---



