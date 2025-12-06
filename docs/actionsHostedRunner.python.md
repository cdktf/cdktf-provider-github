# `actionsHostedRunner` Submodule <a name="`actionsHostedRunner` Submodule" id="@cdktf/provider-github.actionsHostedRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsHostedRunner <a name="ActionsHostedRunner" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner github_actions_hosted_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunner(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  image: ActionsHostedRunnerImage,
  name: str,
  runner_group_id: typing.Union[int, float],
  size: str,
  image_gen: bool | IResolvable = None,
  image_version: str = None,
  maximum_runners: typing.Union[int, float] = None,
  public_ip_enabled: bool | IResolvable = None,
  timeouts: ActionsHostedRunnerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.image">image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the hosted runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.runnerGroupId">runner_group_id</a></code> | <code>typing.Union[int, float]</code> | The runner group ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.size">size</a></code> | <code>str</code> | Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.imageGen">image_gen</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether this runner should be used to generate custom images. Cannot be changed after creation. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.imageVersion">image_version</a></code> | <code>str</code> | The version of the runner image to deploy. This is relevant only for runners using custom images. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.maximumRunners">maximum_runners</a></code> | <code>typing.Union[int, float]</code> | Maximum number of runners to scale up to. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.publicIpEnabled">public_ip_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to enable static public IP. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.image"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image ActionsHostedRunner#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.name"></a>

- *Type:* str

Name of the hosted runner.

Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#name ActionsHostedRunner#name}

---

##### `runner_group_id`<sup>Required</sup> <a name="runner_group_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.runnerGroupId"></a>

- *Type:* typing.Union[int, float]

The runner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#runner_group_id ActionsHostedRunner#runner_group_id}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.size"></a>

- *Type:* str

Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#size ActionsHostedRunner#size}

---

##### `image_gen`<sup>Optional</sup> <a name="image_gen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.imageGen"></a>

- *Type:* bool | cdktf.IResolvable

Whether this runner should be used to generate custom images. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_gen ActionsHostedRunner#image_gen}

---

##### `image_version`<sup>Optional</sup> <a name="image_version" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.imageVersion"></a>

- *Type:* str

The version of the runner image to deploy. This is relevant only for runners using custom images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_version ActionsHostedRunner#image_version}

---

##### `maximum_runners`<sup>Optional</sup> <a name="maximum_runners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.maximumRunners"></a>

- *Type:* typing.Union[int, float]

Maximum number of runners to scale up to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#maximum_runners ActionsHostedRunner#maximum_runners}

---

##### `public_ip_enabled`<sup>Optional</sup> <a name="public_ip_enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.publicIpEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether to enable static public IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#public_ip_enabled ActionsHostedRunner#public_ip_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#timeouts ActionsHostedRunner#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen">reset_image_gen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion">reset_image_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners">reset_maximum_runners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled">reset_public_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_image` <a name="put_image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage"></a>

```python
def put_image(
  id: str,
  source: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage.parameter.id"></a>

- *Type:* str

The image ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#id ActionsHostedRunner#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage.parameter.source"></a>

- *Type:* str

The image source (github, partner, or custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#source ActionsHostedRunner#source}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}.

---

##### `reset_image_gen` <a name="reset_image_gen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen"></a>

```python
def reset_image_gen() -> None
```

##### `reset_image_version` <a name="reset_image_version" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion"></a>

```python
def reset_image_version() -> None
```

##### `reset_maximum_runners` <a name="reset_maximum_runners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners"></a>

```python
def reset_maximum_runners() -> None
```

##### `reset_public_ip_enabled` <a name="reset_public_ip_enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled"></a>

```python
def reset_public_ip_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunner.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunner.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunner.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunner.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ActionsHostedRunner to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ActionsHostedRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionsHostedRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image">image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn">last_active_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails">machine_size_details</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps">public_ips</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput">image_gen_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput">image_input</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput">image_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput">maximum_runners_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput">public_ip_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput">runner_group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen">image_gen</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion">image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners">maximum_runners</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled">public_ip_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId">runner_group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size">size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image"></a>

```python
image: ActionsHostedRunnerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a>

---

##### `last_active_on`<sup>Required</sup> <a name="last_active_on" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn"></a>

```python
last_active_on: str
```

- *Type:* str

---

##### `machine_size_details`<sup>Required</sup> <a name="machine_size_details" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails"></a>

```python
machine_size_details: ActionsHostedRunnerMachineSizeDetailsList
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `public_ips`<sup>Required</sup> <a name="public_ips" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps"></a>

```python
public_ips: ActionsHostedRunnerPublicIpsList
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts"></a>

```python
timeouts: ActionsHostedRunnerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a>

---

##### `image_gen_input`<sup>Optional</sup> <a name="image_gen_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput"></a>

```python
image_gen_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput"></a>

```python
image_input: ActionsHostedRunnerImage
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `image_version_input`<sup>Optional</sup> <a name="image_version_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput"></a>

```python
image_version_input: str
```

- *Type:* str

---

##### `maximum_runners_input`<sup>Optional</sup> <a name="maximum_runners_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput"></a>

```python
maximum_runners_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_ip_enabled_input`<sup>Optional</sup> <a name="public_ip_enabled_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput"></a>

```python
public_ip_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `runner_group_id_input`<sup>Optional</sup> <a name="runner_group_id_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput"></a>

```python
runner_group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ActionsHostedRunnerTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---

##### `image_gen`<sup>Required</sup> <a name="image_gen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen"></a>

```python
image_gen: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `image_version`<sup>Required</sup> <a name="image_version" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

---

##### `maximum_runners`<sup>Required</sup> <a name="maximum_runners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners"></a>

```python
maximum_runners: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_ip_enabled`<sup>Required</sup> <a name="public_ip_enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled"></a>

```python
public_ip_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `runner_group_id`<sup>Required</sup> <a name="runner_group_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId"></a>

```python
runner_group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size"></a>

```python
size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsHostedRunnerConfig <a name="ActionsHostedRunnerConfig" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  image: ActionsHostedRunnerImage,
  name: str,
  runner_group_id: typing.Union[int, float],
  size: str,
  image_gen: bool | IResolvable = None,
  image_version: str = None,
  maximum_runners: typing.Union[int, float] = None,
  public_ip_enabled: bool | IResolvable = None,
  timeouts: ActionsHostedRunnerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image">image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name">name</a></code> | <code>str</code> | Name of the hosted runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId">runner_group_id</a></code> | <code>typing.Union[int, float]</code> | The runner group ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size">size</a></code> | <code>str</code> | Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen">image_gen</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether this runner should be used to generate custom images. Cannot be changed after creation. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion">image_version</a></code> | <code>str</code> | The version of the runner image to deploy. This is relevant only for runners using custom images. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners">maximum_runners</a></code> | <code>typing.Union[int, float]</code> | Maximum number of runners to scale up to. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled">public_ip_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to enable static public IP. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image"></a>

```python
image: ActionsHostedRunnerImage
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image ActionsHostedRunner#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the hosted runner.

Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#name ActionsHostedRunner#name}

---

##### `runner_group_id`<sup>Required</sup> <a name="runner_group_id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId"></a>

```python
runner_group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The runner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#runner_group_id ActionsHostedRunner#runner_group_id}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size"></a>

```python
size: str
```

- *Type:* str

Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#size ActionsHostedRunner#size}

---

##### `image_gen`<sup>Optional</sup> <a name="image_gen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen"></a>

```python
image_gen: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether this runner should be used to generate custom images. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_gen ActionsHostedRunner#image_gen}

---

##### `image_version`<sup>Optional</sup> <a name="image_version" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion"></a>

```python
image_version: str
```

- *Type:* str

The version of the runner image to deploy. This is relevant only for runners using custom images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_version ActionsHostedRunner#image_version}

---

##### `maximum_runners`<sup>Optional</sup> <a name="maximum_runners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners"></a>

```python
maximum_runners: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of runners to scale up to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#maximum_runners ActionsHostedRunner#maximum_runners}

---

##### `public_ip_enabled`<sup>Optional</sup> <a name="public_ip_enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled"></a>

```python
public_ip_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether to enable static public IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#public_ip_enabled ActionsHostedRunner#public_ip_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts"></a>

```python
timeouts: ActionsHostedRunnerTimeouts
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#timeouts ActionsHostedRunner#timeouts}

---

### ActionsHostedRunnerImage <a name="ActionsHostedRunnerImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerImage(
  id: str,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id">id</a></code> | <code>str</code> | The image ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source">source</a></code> | <code>str</code> | The image source (github, partner, or custom). |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id"></a>

```python
id: str
```

- *Type:* str

The image ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#id ActionsHostedRunner#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source"></a>

```python
source: str
```

- *Type:* str

The image source (github, partner, or custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#source ActionsHostedRunner#source}

---

### ActionsHostedRunnerMachineSizeDetails <a name="ActionsHostedRunnerMachineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails()
```


### ActionsHostedRunnerPublicIps <a name="ActionsHostedRunnerPublicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerPublicIps()
```


### ActionsHostedRunnerTimeouts <a name="ActionsHostedRunnerTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsHostedRunnerImageOutputReference <a name="ActionsHostedRunnerImageOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source` <a name="reset_source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue"></a>

```python
internal_value: ActionsHostedRunnerImage
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---


### ActionsHostedRunnerMachineSizeDetailsList <a name="ActionsHostedRunnerMachineSizeDetailsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ActionsHostedRunnerMachineSizeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ActionsHostedRunnerMachineSizeDetailsOutputReference <a name="ActionsHostedRunnerMachineSizeDetailsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores">cpu_cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb">storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_cores`<sup>Required</sup> <a name="cpu_cores" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores"></a>

```python
cpu_cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_gb`<sup>Required</sup> <a name="storage_gb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb"></a>

```python
storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ActionsHostedRunnerMachineSizeDetails
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a>

---


### ActionsHostedRunnerPublicIpsList <a name="ActionsHostedRunnerPublicIpsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerPublicIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ActionsHostedRunnerPublicIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ActionsHostedRunnerPublicIpsOutputReference <a name="ActionsHostedRunnerPublicIpsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue"></a>

```python
internal_value: ActionsHostedRunnerPublicIps
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a>

---


### ActionsHostedRunnerTimeoutsOutputReference <a name="ActionsHostedRunnerTimeoutsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import actions_hosted_runner

actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionsHostedRunnerTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---



