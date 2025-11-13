# `repositoryEnvironment` Submodule <a name="`repositoryEnvironment` Submodule" id="@cdktf/provider-github.repositoryEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryEnvironment <a name="RepositoryEnvironment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment github_repository_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment: str,
  repository: str,
  can_admins_bypass: bool | IResolvable = None,
  deployment_branch_policy: RepositoryEnvironmentDeploymentBranchPolicy = None,
  id: str = None,
  prevent_self_review: bool | IResolvable = None,
  reviewers: IResolvable | typing.List[RepositoryEnvironmentReviewers] = None,
  wait_timer: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The repository of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.canAdminsBypass">can_admins_bypass</a></code> | <code>bool \| cdktf.IResolvable</code> | Can Admins bypass deployment protections. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.deploymentBranchPolicy">deployment_branch_policy</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | deployment_branch_policy block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#id RepositoryEnvironment#id}. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.preventSelfReview">prevent_self_review</a></code> | <code>bool \| cdktf.IResolvable</code> | Prevent users from approving workflows runs that they triggered. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.reviewers">reviewers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]</code> | reviewers block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.waitTimer">wait_timer</a></code> | <code>typing.Union[int, float]</code> | Amount of time to delay a job after the job is initially triggered. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.environment"></a>

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#environment RepositoryEnvironment#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.repository"></a>

- *Type:* str

The repository of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#repository RepositoryEnvironment#repository}

---

##### `can_admins_bypass`<sup>Optional</sup> <a name="can_admins_bypass" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.canAdminsBypass"></a>

- *Type:* bool | cdktf.IResolvable

Can Admins bypass deployment protections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#can_admins_bypass RepositoryEnvironment#can_admins_bypass}

---

##### `deployment_branch_policy`<sup>Optional</sup> <a name="deployment_branch_policy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.deploymentBranchPolicy"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

deployment_branch_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#id RepositoryEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prevent_self_review`<sup>Optional</sup> <a name="prevent_self_review" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.preventSelfReview"></a>

- *Type:* bool | cdktf.IResolvable

Prevent users from approving workflows runs that they triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#prevent_self_review RepositoryEnvironment#prevent_self_review}

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.reviewers"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#reviewers RepositoryEnvironment#reviewers}

---

##### `wait_timer`<sup>Optional</sup> <a name="wait_timer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.waitTimer"></a>

- *Type:* typing.Union[int, float]

Amount of time to delay a job after the job is initially triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#wait_timer RepositoryEnvironment#wait_timer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy">put_deployment_branch_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers">put_reviewers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetCanAdminsBypass">reset_can_admins_bypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetDeploymentBranchPolicy">reset_deployment_branch_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetPreventSelfReview">reset_prevent_self_review</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetReviewers">reset_reviewers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetWaitTimer">reset_wait_timer</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment_branch_policy` <a name="put_deployment_branch_policy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy"></a>

```python
def put_deployment_branch_policy(
  custom_branch_policies: bool | IResolvable,
  protected_branches: bool | IResolvable
) -> None
```

###### `custom_branch_policies`<sup>Required</sup> <a name="custom_branch_policies" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy.parameter.customBranchPolicies"></a>

- *Type:* bool | cdktf.IResolvable

Whether only branches that match the specified name patterns can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#custom_branch_policies RepositoryEnvironment#custom_branch_policies}

---

###### `protected_branches`<sup>Required</sup> <a name="protected_branches" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy.parameter.protectedBranches"></a>

- *Type:* bool | cdktf.IResolvable

Whether only branches with branch protection rules can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#protected_branches RepositoryEnvironment#protected_branches}

---

##### `put_reviewers` <a name="put_reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers"></a>

```python
def put_reviewers(
  value: IResolvable | typing.List[RepositoryEnvironmentReviewers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]

---

##### `reset_can_admins_bypass` <a name="reset_can_admins_bypass" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetCanAdminsBypass"></a>

```python
def reset_can_admins_bypass() -> None
```

##### `reset_deployment_branch_policy` <a name="reset_deployment_branch_policy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetDeploymentBranchPolicy"></a>

```python
def reset_deployment_branch_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_prevent_self_review` <a name="reset_prevent_self_review" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetPreventSelfReview"></a>

```python
def reset_prevent_self_review() -> None
```

##### `reset_reviewers` <a name="reset_reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetReviewers"></a>

```python
def reset_reviewers() -> None
```

##### `reset_wait_timer` <a name="reset_wait_timer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetWaitTimer"></a>

```python
def reset_wait_timer() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RepositoryEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RepositoryEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicy">deployment_branch_policy</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference">RepositoryEnvironmentDeploymentBranchPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewers">reviewers</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList">RepositoryEnvironmentReviewersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.canAdminsBypassInput">can_admins_bypass_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicyInput">deployment_branch_policy_input</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.preventSelfReviewInput">prevent_self_review_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewersInput">reviewers_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimerInput">wait_timer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.canAdminsBypass">can_admins_bypass</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.preventSelfReview">prevent_self_review</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimer">wait_timer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `deployment_branch_policy`<sup>Required</sup> <a name="deployment_branch_policy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicy"></a>

```python
deployment_branch_policy: RepositoryEnvironmentDeploymentBranchPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference">RepositoryEnvironmentDeploymentBranchPolicyOutputReference</a>

---

##### `reviewers`<sup>Required</sup> <a name="reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewers"></a>

```python
reviewers: RepositoryEnvironmentReviewersList
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList">RepositoryEnvironmentReviewersList</a>

---

##### `can_admins_bypass_input`<sup>Optional</sup> <a name="can_admins_bypass_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.canAdminsBypassInput"></a>

```python
can_admins_bypass_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deployment_branch_policy_input`<sup>Optional</sup> <a name="deployment_branch_policy_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicyInput"></a>

```python
deployment_branch_policy_input: RepositoryEnvironmentDeploymentBranchPolicy
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `prevent_self_review_input`<sup>Optional</sup> <a name="prevent_self_review_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.preventSelfReviewInput"></a>

```python
prevent_self_review_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `reviewers_input`<sup>Optional</sup> <a name="reviewers_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewersInput"></a>

```python
reviewers_input: IResolvable | typing.List[RepositoryEnvironmentReviewers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]

---

##### `wait_timer_input`<sup>Optional</sup> <a name="wait_timer_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimerInput"></a>

```python
wait_timer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `can_admins_bypass`<sup>Required</sup> <a name="can_admins_bypass" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.canAdminsBypass"></a>

```python
can_admins_bypass: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prevent_self_review`<sup>Required</sup> <a name="prevent_self_review" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.preventSelfReview"></a>

```python
prevent_self_review: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `wait_timer`<sup>Required</sup> <a name="wait_timer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimer"></a>

```python
wait_timer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryEnvironmentConfig <a name="RepositoryEnvironmentConfig" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  environment: str,
  repository: str,
  can_admins_bypass: bool | IResolvable = None,
  deployment_branch_policy: RepositoryEnvironmentDeploymentBranchPolicy = None,
  id: str = None,
  prevent_self_review: bool | IResolvable = None,
  reviewers: IResolvable | typing.List[RepositoryEnvironmentReviewers] = None,
  wait_timer: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.environment">environment</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.repository">repository</a></code> | <code>str</code> | The repository of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.canAdminsBypass">can_admins_bypass</a></code> | <code>bool \| cdktf.IResolvable</code> | Can Admins bypass deployment protections. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.deploymentBranchPolicy">deployment_branch_policy</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | deployment_branch_policy block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#id RepositoryEnvironment#id}. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.preventSelfReview">prevent_self_review</a></code> | <code>bool \| cdktf.IResolvable</code> | Prevent users from approving workflows runs that they triggered. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.reviewers">reviewers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]</code> | reviewers block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.waitTimer">wait_timer</a></code> | <code>typing.Union[int, float]</code> | Amount of time to delay a job after the job is initially triggered. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#environment RepositoryEnvironment#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#repository RepositoryEnvironment#repository}

---

##### `can_admins_bypass`<sup>Optional</sup> <a name="can_admins_bypass" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.canAdminsBypass"></a>

```python
can_admins_bypass: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Can Admins bypass deployment protections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#can_admins_bypass RepositoryEnvironment#can_admins_bypass}

---

##### `deployment_branch_policy`<sup>Optional</sup> <a name="deployment_branch_policy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.deploymentBranchPolicy"></a>

```python
deployment_branch_policy: RepositoryEnvironmentDeploymentBranchPolicy
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

deployment_branch_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#id RepositoryEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prevent_self_review`<sup>Optional</sup> <a name="prevent_self_review" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.preventSelfReview"></a>

```python
prevent_self_review: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Prevent users from approving workflows runs that they triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#prevent_self_review RepositoryEnvironment#prevent_self_review}

---

##### `reviewers`<sup>Optional</sup> <a name="reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.reviewers"></a>

```python
reviewers: IResolvable | typing.List[RepositoryEnvironmentReviewers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#reviewers RepositoryEnvironment#reviewers}

---

##### `wait_timer`<sup>Optional</sup> <a name="wait_timer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.waitTimer"></a>

```python
wait_timer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of time to delay a job after the job is initially triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#wait_timer RepositoryEnvironment#wait_timer}

---

### RepositoryEnvironmentDeploymentBranchPolicy <a name="RepositoryEnvironmentDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy(
  custom_branch_policies: bool | IResolvable,
  protected_branches: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.customBranchPolicies">custom_branch_policies</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether only branches that match the specified name patterns can deploy to this environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.protectedBranches">protected_branches</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether only branches with branch protection rules can deploy to this environment. |

---

##### `custom_branch_policies`<sup>Required</sup> <a name="custom_branch_policies" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.customBranchPolicies"></a>

```python
custom_branch_policies: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether only branches that match the specified name patterns can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#custom_branch_policies RepositoryEnvironment#custom_branch_policies}

---

##### `protected_branches`<sup>Required</sup> <a name="protected_branches" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.protectedBranches"></a>

```python
protected_branches: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether only branches with branch protection rules can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#protected_branches RepositoryEnvironment#protected_branches}

---

### RepositoryEnvironmentReviewers <a name="RepositoryEnvironmentReviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironmentReviewers(
  teams: typing.List[typing.Union[int, float]] = None,
  users: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.teams">teams</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Up to 6 IDs for teams who may review jobs that reference the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.users">users</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Up to 6 IDs for users who may review jobs that reference the environment. |

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.teams"></a>

```python
teams: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Up to 6 IDs for teams who may review jobs that reference the environment.

Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#teams RepositoryEnvironment#teams}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.users"></a>

```python
users: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Up to 6 IDs for users who may review jobs that reference the environment.

Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/repository_environment#users RepositoryEnvironment#users}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryEnvironmentDeploymentBranchPolicyOutputReference <a name="RepositoryEnvironmentDeploymentBranchPolicyOutputReference" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPoliciesInput">custom_branch_policies_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranchesInput">protected_branches_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPolicies">custom_branch_policies</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranches">protected_branches</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_branch_policies_input`<sup>Optional</sup> <a name="custom_branch_policies_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPoliciesInput"></a>

```python
custom_branch_policies_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `protected_branches_input`<sup>Optional</sup> <a name="protected_branches_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranchesInput"></a>

```python
protected_branches_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `custom_branch_policies`<sup>Required</sup> <a name="custom_branch_policies" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPolicies"></a>

```python
custom_branch_policies: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `protected_branches`<sup>Required</sup> <a name="protected_branches" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranches"></a>

```python
protected_branches: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.internalValue"></a>

```python
internal_value: RepositoryEnvironmentDeploymentBranchPolicy
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---


### RepositoryEnvironmentReviewersList <a name="RepositoryEnvironmentReviewersList" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironmentReviewersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RepositoryEnvironmentReviewersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RepositoryEnvironmentReviewers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>]

---


### RepositoryEnvironmentReviewersOutputReference <a name="RepositoryEnvironmentReviewersOutputReference" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_environment

repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetTeams">reset_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teams">teams</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.users">users</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.usersInput"></a>

```python
users_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teams"></a>

```python
teams: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.users"></a>

```python
users: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RepositoryEnvironmentReviewers
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>

---



