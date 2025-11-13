# `organizationRuleset` Submodule <a name="`organizationRuleset` Submodule" id="@cdktf/provider-github.organizationRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationRuleset <a name="OrganizationRuleset" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset github_organization_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRuleset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enforcement: str,
  name: str,
  rules: OrganizationRulesetRules,
  target: str,
  bypass_actors: IResolvable | typing.List[OrganizationRulesetBypassActors] = None,
  conditions: OrganizationRulesetConditions = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.enforcement">enforcement</a></code> | <code>str</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.target">target</a></code> | <code>str</code> | Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.bypassActors">bypass_actors</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]</code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.enforcement"></a>

- *Type:* str

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.name"></a>

- *Type:* str

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.rules"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.target"></a>

- *Type:* str

Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#target OrganizationRuleset#target}

---

##### `bypass_actors`<sup>Optional</sup> <a name="bypass_actors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.bypassActors"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors">put_bypass_actors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetBypassActors">reset_bypass_actors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bypass_actors` <a name="put_bypass_actors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors"></a>

```python
def put_bypass_actors(
  value: IResolvable | typing.List[OrganizationRulesetBypassActors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions"></a>

```python
def put_conditions(
  ref_name: OrganizationRulesetConditionsRefName,
  repository_id: typing.List[typing.Union[int, float]] = None,
  repository_name: OrganizationRulesetConditionsRepositoryName = None
) -> None
```

###### `ref_name`<sup>Required</sup> <a name="ref_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions.parameter.refName"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

ref_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#ref_name OrganizationRuleset#ref_name}

---

###### `repository_id`<sup>Optional</sup> <a name="repository_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions.parameter.repositoryId"></a>

- *Type:* typing.List[typing.Union[int, float]]

The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

###### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions.parameter.repositoryName"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

repository_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#repository_name OrganizationRuleset#repository_name}

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules"></a>

```python
def put_rules(
  branch_name_pattern: OrganizationRulesetRulesBranchNamePattern = None,
  commit_author_email_pattern: OrganizationRulesetRulesCommitAuthorEmailPattern = None,
  commit_message_pattern: OrganizationRulesetRulesCommitMessagePattern = None,
  committer_email_pattern: OrganizationRulesetRulesCommitterEmailPattern = None,
  creation: bool | IResolvable = None,
  deletion: bool | IResolvable = None,
  file_extension_restriction: OrganizationRulesetRulesFileExtensionRestriction = None,
  file_path_restriction: OrganizationRulesetRulesFilePathRestriction = None,
  max_file_path_length: OrganizationRulesetRulesMaxFilePathLength = None,
  max_file_size: OrganizationRulesetRulesMaxFileSize = None,
  non_fast_forward: bool | IResolvable = None,
  pull_request: OrganizationRulesetRulesPullRequest = None,
  required_code_scanning: OrganizationRulesetRulesRequiredCodeScanning = None,
  required_linear_history: bool | IResolvable = None,
  required_signatures: bool | IResolvable = None,
  required_status_checks: OrganizationRulesetRulesRequiredStatusChecks = None,
  required_workflows: OrganizationRulesetRulesRequiredWorkflows = None,
  tag_name_pattern: OrganizationRulesetRulesTagNamePattern = None,
  update: bool | IResolvable = None
) -> None
```

###### `branch_name_pattern`<sup>Optional</sup> <a name="branch_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.branchNamePattern"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

branch_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#branch_name_pattern OrganizationRuleset#branch_name_pattern}

---

###### `commit_author_email_pattern`<sup>Optional</sup> <a name="commit_author_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.commitAuthorEmailPattern"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

commit_author_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#commit_author_email_pattern OrganizationRuleset#commit_author_email_pattern}

---

###### `commit_message_pattern`<sup>Optional</sup> <a name="commit_message_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.commitMessagePattern"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

commit_message_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#commit_message_pattern OrganizationRuleset#commit_message_pattern}

---

###### `committer_email_pattern`<sup>Optional</sup> <a name="committer_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.committerEmailPattern"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

committer_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#committer_email_pattern OrganizationRuleset#committer_email_pattern}

---

###### `creation`<sup>Optional</sup> <a name="creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.creation"></a>

- *Type:* bool | cdktf.IResolvable

Only allow users with bypass permission to create matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#creation OrganizationRuleset#creation}

---

###### `deletion`<sup>Optional</sup> <a name="deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.deletion"></a>

- *Type:* bool | cdktf.IResolvable

Only allow users with bypass permissions to delete matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#deletion OrganizationRuleset#deletion}

---

###### `file_extension_restriction`<sup>Optional</sup> <a name="file_extension_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.fileExtensionRestriction"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction">OrganizationRulesetRulesFileExtensionRestriction</a>

file_extension_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#file_extension_restriction OrganizationRuleset#file_extension_restriction}

---

###### `file_path_restriction`<sup>Optional</sup> <a name="file_path_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.filePathRestriction"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction">OrganizationRulesetRulesFilePathRestriction</a>

file_path_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#file_path_restriction OrganizationRuleset#file_path_restriction}

---

###### `max_file_path_length`<sup>Optional</sup> <a name="max_file_path_length" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.maxFilePathLength"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength">OrganizationRulesetRulesMaxFilePathLength</a>

max_file_path_length block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}

---

###### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.maxFileSize"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize">OrganizationRulesetRulesMaxFileSize</a>

max_file_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}

---

###### `non_fast_forward`<sup>Optional</sup> <a name="non_fast_forward" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.nonFastForward"></a>

- *Type:* bool | cdktf.IResolvable

Prevent users with push access from force pushing to branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#non_fast_forward OrganizationRuleset#non_fast_forward}

---

###### `pull_request`<sup>Optional</sup> <a name="pull_request" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.pullRequest"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pull_request OrganizationRuleset#pull_request}

---

###### `required_code_scanning`<sup>Optional</sup> <a name="required_code_scanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.requiredCodeScanning"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

required_code_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_code_scanning OrganizationRuleset#required_code_scanning}

---

###### `required_linear_history`<sup>Optional</sup> <a name="required_linear_history" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.requiredLinearHistory"></a>

- *Type:* bool | cdktf.IResolvable

Prevent merge commits from being pushed to matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_linear_history OrganizationRuleset#required_linear_history}

---

###### `required_signatures`<sup>Optional</sup> <a name="required_signatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.requiredSignatures"></a>

- *Type:* bool | cdktf.IResolvable

Commits pushed to matching branches must have verified signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_signatures OrganizationRuleset#required_signatures}

---

###### `required_status_checks`<sup>Optional</sup> <a name="required_status_checks" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.requiredStatusChecks"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_status_checks OrganizationRuleset#required_status_checks}

---

###### `required_workflows`<sup>Optional</sup> <a name="required_workflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.requiredWorkflows"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

required_workflows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_workflows OrganizationRuleset#required_workflows}

---

###### `tag_name_pattern`<sup>Optional</sup> <a name="tag_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.tagNamePattern"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

tag_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#tag_name_pattern OrganizationRuleset#tag_name_pattern}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.update"></a>

- *Type:* bool | cdktf.IResolvable

Only allow users with bypass permission to update matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#update OrganizationRuleset#update}

---

##### `reset_bypass_actors` <a name="reset_bypass_actors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetBypassActors"></a>

```python
def reset_bypass_actors() -> None
```

##### `reset_conditions` <a name="reset_conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRuleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRuleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRuleset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRuleset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationRuleset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActors">bypass_actors</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList">OrganizationRulesetBypassActorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference">OrganizationRulesetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference">OrganizationRulesetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesetId">ruleset_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActorsInput">bypass_actors_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditionsInput">conditions_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcementInput">enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesInput">rules_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcement">enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `bypass_actors`<sup>Required</sup> <a name="bypass_actors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActors"></a>

```python
bypass_actors: OrganizationRulesetBypassActorsList
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList">OrganizationRulesetBypassActorsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditions"></a>

```python
conditions: OrganizationRulesetConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference">OrganizationRulesetConditionsOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rules"></a>

```python
rules: OrganizationRulesetRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference">OrganizationRulesetRulesOutputReference</a>

---

##### `ruleset_id`<sup>Required</sup> <a name="ruleset_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesetId"></a>

```python
ruleset_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bypass_actors_input`<sup>Optional</sup> <a name="bypass_actors_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActorsInput"></a>

```python
bypass_actors_input: IResolvable | typing.List[OrganizationRulesetBypassActors]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditionsInput"></a>

```python
conditions_input: OrganizationRulesetConditions
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---

##### `enforcement_input`<sup>Optional</sup> <a name="enforcement_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcementInput"></a>

```python
enforcement_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesInput"></a>

```python
rules_input: OrganizationRulesetRules
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcement"></a>

```python
enforcement: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationRulesetBypassActors <a name="OrganizationRulesetBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetBypassActors(
  actor_type: str,
  bypass_mode: str,
  actor_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorType">actor_type</a></code> | <code>str</code> | The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/orgs/rules for more information. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.bypassMode">bypass_mode</a></code> | <code>str</code> | When the specified actor can bypass the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorId">actor_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the actor that can bypass a ruleset. |

---

##### `actor_type`<sup>Required</sup> <a name="actor_type" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorType"></a>

```python
actor_type: str
```

- *Type:* str

The type of actor that can bypass a ruleset. See https://docs.github.com/en/rest/orgs/rules for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#actor_type OrganizationRuleset#actor_type}

---

##### `bypass_mode`<sup>Required</sup> <a name="bypass_mode" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.bypassMode"></a>

```python
bypass_mode: str
```

- *Type:* str

When the specified actor can bypass the ruleset.

pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`, `exempt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#bypass_mode OrganizationRuleset#bypass_mode}

---

##### `actor_id`<sup>Optional</sup> <a name="actor_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorId"></a>

```python
actor_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the actor that can bypass a ruleset.

When `actor_type` is `OrganizationAdmin`, this should be set to `1`. Some resources such as DeployKey do not have an ID and this should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#actor_id OrganizationRuleset#actor_id}

---

### OrganizationRulesetConditions <a name="OrganizationRulesetConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetConditions(
  ref_name: OrganizationRulesetConditionsRefName,
  repository_id: typing.List[typing.Union[int, float]] = None,
  repository_name: OrganizationRulesetConditionsRepositoryName = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.refName">ref_name</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | ref_name block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryId">repository_id</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryName">repository_name</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | repository_name block. |

---

##### `ref_name`<sup>Required</sup> <a name="ref_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.refName"></a>

```python
ref_name: OrganizationRulesetConditionsRefName
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

ref_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#ref_name OrganizationRuleset#ref_name}

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryId"></a>

```python
repository_id: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryName"></a>

```python
repository_name: OrganizationRulesetConditionsRepositoryName
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

repository_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#repository_name OrganizationRuleset#repository_name}

---

### OrganizationRulesetConditionsRefName <a name="OrganizationRulesetConditionsRefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetConditionsRefName(
  exclude: typing.List[str],
  include: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.include">include</a></code> | <code>typing.List[str]</code> | Array of ref names or patterns to include. |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

Array of ref names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

### OrganizationRulesetConditionsRepositoryName <a name="OrganizationRulesetConditionsRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetConditionsRepositoryName(
  exclude: typing.List[str],
  include: typing.List[str],
  protected: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.include">include</a></code> | <code>typing.List[str]</code> | Array of repository names or patterns to include. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.protected">protected</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether renaming of target repositories is prevented. |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

Array of repository names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.protected"></a>

```python
protected: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether renaming of target repositories is prevented.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#protected OrganizationRuleset#protected}

---

### OrganizationRulesetConfig <a name="OrganizationRulesetConfig" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enforcement: str,
  name: str,
  rules: OrganizationRulesetRules,
  target: str,
  bypass_actors: IResolvable | typing.List[OrganizationRulesetBypassActors] = None,
  conditions: OrganizationRulesetConditions = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.enforcement">enforcement</a></code> | <code>str</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.name">name</a></code> | <code>str</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.target">target</a></code> | <code>str</code> | Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.bypassActors">bypass_actors</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]</code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.enforcement"></a>

```python
enforcement: str
```

- *Type:* str

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.rules"></a>

```python
rules: OrganizationRulesetRules
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Possible values are `branch`, `tag` and `push`. Note: The `push` target is in beta and is subject to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#target OrganizationRuleset#target}

---

##### `bypass_actors`<sup>Optional</sup> <a name="bypass_actors" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.bypassActors"></a>

```python
bypass_actors: IResolvable | typing.List[OrganizationRulesetBypassActors]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.conditions"></a>

```python
conditions: OrganizationRulesetConditions
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationRulesetRules <a name="OrganizationRulesetRules" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRules(
  branch_name_pattern: OrganizationRulesetRulesBranchNamePattern = None,
  commit_author_email_pattern: OrganizationRulesetRulesCommitAuthorEmailPattern = None,
  commit_message_pattern: OrganizationRulesetRulesCommitMessagePattern = None,
  committer_email_pattern: OrganizationRulesetRulesCommitterEmailPattern = None,
  creation: bool | IResolvable = None,
  deletion: bool | IResolvable = None,
  file_extension_restriction: OrganizationRulesetRulesFileExtensionRestriction = None,
  file_path_restriction: OrganizationRulesetRulesFilePathRestriction = None,
  max_file_path_length: OrganizationRulesetRulesMaxFilePathLength = None,
  max_file_size: OrganizationRulesetRulesMaxFileSize = None,
  non_fast_forward: bool | IResolvable = None,
  pull_request: OrganizationRulesetRulesPullRequest = None,
  required_code_scanning: OrganizationRulesetRulesRequiredCodeScanning = None,
  required_linear_history: bool | IResolvable = None,
  required_signatures: bool | IResolvable = None,
  required_status_checks: OrganizationRulesetRulesRequiredStatusChecks = None,
  required_workflows: OrganizationRulesetRulesRequiredWorkflows = None,
  tag_name_pattern: OrganizationRulesetRulesTagNamePattern = None,
  update: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.branchNamePattern">branch_name_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | branch_name_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitAuthorEmailPattern">commit_author_email_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | commit_author_email_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitMessagePattern">commit_message_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | commit_message_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.committerEmailPattern">committer_email_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | committer_email_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.creation">creation</a></code> | <code>bool \| cdktf.IResolvable</code> | Only allow users with bypass permission to create matching refs. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.deletion">deletion</a></code> | <code>bool \| cdktf.IResolvable</code> | Only allow users with bypass permissions to delete matching refs. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.fileExtensionRestriction">file_extension_restriction</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction">OrganizationRulesetRulesFileExtensionRestriction</a></code> | file_extension_restriction block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.filePathRestriction">file_path_restriction</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction">OrganizationRulesetRulesFilePathRestriction</a></code> | file_path_restriction block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.maxFilePathLength">max_file_path_length</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength">OrganizationRulesetRulesMaxFilePathLength</a></code> | max_file_path_length block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.maxFileSize">max_file_size</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize">OrganizationRulesetRulesMaxFileSize</a></code> | max_file_size block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.nonFastForward">non_fast_forward</a></code> | <code>bool \| cdktf.IResolvable</code> | Prevent users with push access from force pushing to branches. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.pullRequest">pull_request</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredCodeScanning">required_code_scanning</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | required_code_scanning block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredLinearHistory">required_linear_history</a></code> | <code>bool \| cdktf.IResolvable</code> | Prevent merge commits from being pushed to matching branches. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredSignatures">required_signatures</a></code> | <code>bool \| cdktf.IResolvable</code> | Commits pushed to matching branches must have verified signatures. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredStatusChecks">required_status_checks</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredWorkflows">required_workflows</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | required_workflows block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.tagNamePattern">tag_name_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | tag_name_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.update">update</a></code> | <code>bool \| cdktf.IResolvable</code> | Only allow users with bypass permission to update matching refs. |

---

##### `branch_name_pattern`<sup>Optional</sup> <a name="branch_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.branchNamePattern"></a>

```python
branch_name_pattern: OrganizationRulesetRulesBranchNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

branch_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#branch_name_pattern OrganizationRuleset#branch_name_pattern}

---

##### `commit_author_email_pattern`<sup>Optional</sup> <a name="commit_author_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitAuthorEmailPattern"></a>

```python
commit_author_email_pattern: OrganizationRulesetRulesCommitAuthorEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

commit_author_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#commit_author_email_pattern OrganizationRuleset#commit_author_email_pattern}

---

##### `commit_message_pattern`<sup>Optional</sup> <a name="commit_message_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitMessagePattern"></a>

```python
commit_message_pattern: OrganizationRulesetRulesCommitMessagePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

commit_message_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#commit_message_pattern OrganizationRuleset#commit_message_pattern}

---

##### `committer_email_pattern`<sup>Optional</sup> <a name="committer_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.committerEmailPattern"></a>

```python
committer_email_pattern: OrganizationRulesetRulesCommitterEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

committer_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#committer_email_pattern OrganizationRuleset#committer_email_pattern}

---

##### `creation`<sup>Optional</sup> <a name="creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.creation"></a>

```python
creation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Only allow users with bypass permission to create matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#creation OrganizationRuleset#creation}

---

##### `deletion`<sup>Optional</sup> <a name="deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.deletion"></a>

```python
deletion: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Only allow users with bypass permissions to delete matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#deletion OrganizationRuleset#deletion}

---

##### `file_extension_restriction`<sup>Optional</sup> <a name="file_extension_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.fileExtensionRestriction"></a>

```python
file_extension_restriction: OrganizationRulesetRulesFileExtensionRestriction
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction">OrganizationRulesetRulesFileExtensionRestriction</a>

file_extension_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#file_extension_restriction OrganizationRuleset#file_extension_restriction}

---

##### `file_path_restriction`<sup>Optional</sup> <a name="file_path_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.filePathRestriction"></a>

```python
file_path_restriction: OrganizationRulesetRulesFilePathRestriction
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction">OrganizationRulesetRulesFilePathRestriction</a>

file_path_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#file_path_restriction OrganizationRuleset#file_path_restriction}

---

##### `max_file_path_length`<sup>Optional</sup> <a name="max_file_path_length" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.maxFilePathLength"></a>

```python
max_file_path_length: OrganizationRulesetRulesMaxFilePathLength
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength">OrganizationRulesetRulesMaxFilePathLength</a>

max_file_path_length block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}

---

##### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.maxFileSize"></a>

```python
max_file_size: OrganizationRulesetRulesMaxFileSize
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize">OrganizationRulesetRulesMaxFileSize</a>

max_file_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}

---

##### `non_fast_forward`<sup>Optional</sup> <a name="non_fast_forward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.nonFastForward"></a>

```python
non_fast_forward: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Prevent users with push access from force pushing to branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#non_fast_forward OrganizationRuleset#non_fast_forward}

---

##### `pull_request`<sup>Optional</sup> <a name="pull_request" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.pullRequest"></a>

```python
pull_request: OrganizationRulesetRulesPullRequest
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pull_request OrganizationRuleset#pull_request}

---

##### `required_code_scanning`<sup>Optional</sup> <a name="required_code_scanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredCodeScanning"></a>

```python
required_code_scanning: OrganizationRulesetRulesRequiredCodeScanning
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

required_code_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_code_scanning OrganizationRuleset#required_code_scanning}

---

##### `required_linear_history`<sup>Optional</sup> <a name="required_linear_history" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredLinearHistory"></a>

```python
required_linear_history: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Prevent merge commits from being pushed to matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_linear_history OrganizationRuleset#required_linear_history}

---

##### `required_signatures`<sup>Optional</sup> <a name="required_signatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredSignatures"></a>

```python
required_signatures: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Commits pushed to matching branches must have verified signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_signatures OrganizationRuleset#required_signatures}

---

##### `required_status_checks`<sup>Optional</sup> <a name="required_status_checks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredStatusChecks"></a>

```python
required_status_checks: OrganizationRulesetRulesRequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_status_checks OrganizationRuleset#required_status_checks}

---

##### `required_workflows`<sup>Optional</sup> <a name="required_workflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredWorkflows"></a>

```python
required_workflows: OrganizationRulesetRulesRequiredWorkflows
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

required_workflows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_workflows OrganizationRuleset#required_workflows}

---

##### `tag_name_pattern`<sup>Optional</sup> <a name="tag_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.tagNamePattern"></a>

```python
tag_name_pattern: OrganizationRulesetRulesTagNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

tag_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#tag_name_pattern OrganizationRuleset#tag_name_pattern}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.update"></a>

```python
update: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Only allow users with bypass permission to update matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#update OrganizationRuleset#update}

---

### OrganizationRulesetRulesBranchNamePattern <a name="OrganizationRulesetRulesBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesBranchNamePattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.operator">operator</a></code> | <code>str</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.pattern">pattern</a></code> | <code>str</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.name">name</a></code> | <code>str</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.name"></a>

```python
name: str
```

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitAuthorEmailPattern <a name="OrganizationRulesetRulesCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.operator">operator</a></code> | <code>str</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.pattern">pattern</a></code> | <code>str</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.name">name</a></code> | <code>str</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.name"></a>

```python
name: str
```

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitMessagePattern <a name="OrganizationRulesetRulesCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesCommitMessagePattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.operator">operator</a></code> | <code>str</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.pattern">pattern</a></code> | <code>str</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.name">name</a></code> | <code>str</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.name"></a>

```python
name: str
```

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitterEmailPattern <a name="OrganizationRulesetRulesCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.operator">operator</a></code> | <code>str</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.pattern">pattern</a></code> | <code>str</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.name">name</a></code> | <code>str</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.name"></a>

```python
name: str
```

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesFileExtensionRestriction <a name="OrganizationRulesetRulesFileExtensionRestriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction(
  restricted_file_extensions: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction.property.restrictedFileExtensions">restricted_file_extensions</a></code> | <code>typing.List[str]</code> | The file extensions that are restricted from being pushed to the commit graph. |

---

##### `restricted_file_extensions`<sup>Required</sup> <a name="restricted_file_extensions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction.property.restrictedFileExtensions"></a>

```python
restricted_file_extensions: typing.List[str]
```

- *Type:* typing.List[str]

The file extensions that are restricted from being pushed to the commit graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#restricted_file_extensions OrganizationRuleset#restricted_file_extensions}

---

### OrganizationRulesetRulesFilePathRestriction <a name="OrganizationRulesetRulesFilePathRestriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesFilePathRestriction(
  restricted_file_paths: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction.property.restrictedFilePaths">restricted_file_paths</a></code> | <code>typing.List[str]</code> | The file paths that are restricted from being pushed to the commit graph. |

---

##### `restricted_file_paths`<sup>Required</sup> <a name="restricted_file_paths" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction.property.restrictedFilePaths"></a>

```python
restricted_file_paths: typing.List[str]
```

- *Type:* typing.List[str]

The file paths that are restricted from being pushed to the commit graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#restricted_file_paths OrganizationRuleset#restricted_file_paths}

---

### OrganizationRulesetRulesMaxFilePathLength <a name="OrganizationRulesetRulesMaxFilePathLength" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesMaxFilePathLength(
  max_file_path_length: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength.property.maxFilePathLength">max_file_path_length</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed length of a file path. |

---

##### `max_file_path_length`<sup>Required</sup> <a name="max_file_path_length" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength.property.maxFilePathLength"></a>

```python
max_file_path_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed length of a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}

---

### OrganizationRulesetRulesMaxFileSize <a name="OrganizationRulesetRulesMaxFileSize" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesMaxFileSize(
  max_file_size: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed size of a file in bytes. |

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed size of a file in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}

---

### OrganizationRulesetRulesPullRequest <a name="OrganizationRulesetRulesPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesPullRequest(
  dismiss_stale_reviews_on_push: bool | IResolvable = None,
  require_code_owner_review: bool | IResolvable = None,
  required_approving_review_count: typing.Union[int, float] = None,
  required_review_thread_resolution: bool | IResolvable = None,
  require_last_push_approval: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.dismissStaleReviewsOnPush">dismiss_stale_reviews_on_push</a></code> | <code>bool \| cdktf.IResolvable</code> | New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireCodeOwnerReview">require_code_owner_review</a></code> | <code>bool \| cdktf.IResolvable</code> | Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredApprovingReviewCount">required_approving_review_count</a></code> | <code>typing.Union[int, float]</code> | The number of approving reviews that are required before a pull request can be merged. Defaults to `0`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredReviewThreadResolution">required_review_thread_resolution</a></code> | <code>bool \| cdktf.IResolvable</code> | All conversations on code must be resolved before a pull request can be merged. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireLastPushApproval">require_last_push_approval</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the most recent reviewable push must be approved by someone other than the person who pushed it. |

---

##### `dismiss_stale_reviews_on_push`<sup>Optional</sup> <a name="dismiss_stale_reviews_on_push" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.dismissStaleReviewsOnPush"></a>

```python
dismiss_stale_reviews_on_push: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#dismiss_stale_reviews_on_push OrganizationRuleset#dismiss_stale_reviews_on_push}

---

##### `require_code_owner_review`<sup>Optional</sup> <a name="require_code_owner_review" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireCodeOwnerReview"></a>

```python
require_code_owner_review: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#require_code_owner_review OrganizationRuleset#require_code_owner_review}

---

##### `required_approving_review_count`<sup>Optional</sup> <a name="required_approving_review_count" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredApprovingReviewCount"></a>

```python
required_approving_review_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_approving_review_count OrganizationRuleset#required_approving_review_count}

---

##### `required_review_thread_resolution`<sup>Optional</sup> <a name="required_review_thread_resolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredReviewThreadResolution"></a>

```python
required_review_thread_resolution: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_review_thread_resolution OrganizationRuleset#required_review_thread_resolution}

---

##### `require_last_push_approval`<sup>Optional</sup> <a name="require_last_push_approval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireLastPushApproval"></a>

```python
require_last_push_approval: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#require_last_push_approval OrganizationRuleset#require_last_push_approval}

---

### OrganizationRulesetRulesRequiredCodeScanning <a name="OrganizationRulesetRulesRequiredCodeScanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning(
  required_code_scanning_tool: IResolvable | typing.List[OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.property.requiredCodeScanningTool">required_code_scanning_tool</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>]</code> | required_code_scanning_tool block. |

---

##### `required_code_scanning_tool`<sup>Required</sup> <a name="required_code_scanning_tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning.property.requiredCodeScanningTool"></a>

```python
required_code_scanning_tool: IResolvable | typing.List[OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>]

required_code_scanning_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_code_scanning_tool OrganizationRuleset#required_code_scanning_tool}

---

### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool(
  alerts_threshold: str,
  security_alerts_threshold: str,
  tool: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.alertsThreshold">alerts_threshold</a></code> | <code>str</code> | The severity level at which code scanning results that raise alerts block a reference update. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.securityAlertsThreshold">security_alerts_threshold</a></code> | <code>str</code> | The severity level at which code scanning results that raise security alerts block a reference update. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.tool">tool</a></code> | <code>str</code> | The name of a code scanning tool. |

---

##### `alerts_threshold`<sup>Required</sup> <a name="alerts_threshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.alertsThreshold"></a>

```python
alerts_threshold: str
```

- *Type:* str

The severity level at which code scanning results that raise alerts block a reference update.

Can be one of: `none`, `errors`, `errors_and_warnings`, `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#alerts_threshold OrganizationRuleset#alerts_threshold}

---

##### `security_alerts_threshold`<sup>Required</sup> <a name="security_alerts_threshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.securityAlertsThreshold"></a>

```python
security_alerts_threshold: str
```

- *Type:* str

The severity level at which code scanning results that raise security alerts block a reference update.

Can be one of: `none`, `critical`, `high_or_higher`, `medium_or_higher`, `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#security_alerts_threshold OrganizationRuleset#security_alerts_threshold}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool.property.tool"></a>

```python
tool: str
```

- *Type:* str

The name of a code scanning tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#tool OrganizationRuleset#tool}

---

### OrganizationRulesetRulesRequiredStatusChecks <a name="OrganizationRulesetRulesRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks(
  required_check: IResolvable | typing.List[OrganizationRulesetRulesRequiredStatusChecksRequiredCheck],
  do_not_enforce_on_create: bool | IResolvable = None,
  strict_required_status_checks_policy: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.requiredCheck">required_check</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>]</code> | required_check block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.doNotEnforceOnCreate">do_not_enforce_on_create</a></code> | <code>bool \| cdktf.IResolvable</code> | Allow repositories and branches to be created if a check would otherwise prohibit it. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy">strict_required_status_checks_policy</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether pull requests targeting a matching branch must be tested with the latest code. |

---

##### `required_check`<sup>Required</sup> <a name="required_check" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.requiredCheck"></a>

```python
required_check: IResolvable | typing.List[OrganizationRulesetRulesRequiredStatusChecksRequiredCheck]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>]

required_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_check OrganizationRuleset#required_check}

---

##### `do_not_enforce_on_create`<sup>Optional</sup> <a name="do_not_enforce_on_create" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.doNotEnforceOnCreate"></a>

```python
do_not_enforce_on_create: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}

---

##### `strict_required_status_checks_policy`<sup>Optional</sup> <a name="strict_required_status_checks_policy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy"></a>

```python
strict_required_status_checks_policy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether pull requests targeting a matching branch must be tested with the latest code.

This setting will not take effect unless at least one status check is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#strict_required_status_checks_policy OrganizationRuleset#strict_required_status_checks_policy}

---

### OrganizationRulesetRulesRequiredStatusChecksRequiredCheck <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck(
  context: str,
  integration_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.context">context</a></code> | <code>str</code> | The status check context name that must be present on the commit. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId">integration_id</a></code> | <code>typing.Union[int, float]</code> | The optional integration ID that this status check must originate from. |

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.context"></a>

```python
context: str
```

- *Type:* str

The status check context name that must be present on the commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#context OrganizationRuleset#context}

---

##### `integration_id`<sup>Optional</sup> <a name="integration_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId"></a>

```python
integration_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The optional integration ID that this status check must originate from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#integration_id OrganizationRuleset#integration_id}

---

### OrganizationRulesetRulesRequiredWorkflows <a name="OrganizationRulesetRulesRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredWorkflows(
  required_workflow: IResolvable | typing.List[OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow],
  do_not_enforce_on_create: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.requiredWorkflow">required_workflow</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>]</code> | required_workflow block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.doNotEnforceOnCreate">do_not_enforce_on_create</a></code> | <code>bool \| cdktf.IResolvable</code> | Allow repositories and branches to be created if a check would otherwise prohibit it. |

---

##### `required_workflow`<sup>Required</sup> <a name="required_workflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.requiredWorkflow"></a>

```python
required_workflow: IResolvable | typing.List[OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>]

required_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_workflow OrganizationRuleset#required_workflow}

---

##### `do_not_enforce_on_create`<sup>Optional</sup> <a name="do_not_enforce_on_create" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.doNotEnforceOnCreate"></a>

```python
do_not_enforce_on_create: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}

---

### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow(
  path: str,
  repository_id: typing.Union[int, float],
  ref: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.path">path</a></code> | <code>str</code> | The path to the workflow YAML definition file. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.repositoryId">repository_id</a></code> | <code>typing.Union[int, float]</code> | The repository in which the workflow is defined. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.ref">ref</a></code> | <code>str</code> | The ref (branch or tag) of the workflow file to use. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the workflow YAML definition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#path OrganizationRuleset#path}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.repositoryId"></a>

```python
repository_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The repository in which the workflow is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.ref"></a>

```python
ref: str
```

- *Type:* str

The ref (branch or tag) of the workflow file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#ref OrganizationRuleset#ref}

---

### OrganizationRulesetRulesTagNamePattern <a name="OrganizationRulesetRulesTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesTagNamePattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.operator">operator</a></code> | <code>str</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.pattern">pattern</a></code> | <code>str</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.name">name</a></code> | <code>str</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.name"></a>

```python
name: str
```

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationRulesetBypassActorsList <a name="OrganizationRulesetBypassActorsList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetBypassActorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationRulesetBypassActorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OrganizationRulesetBypassActors]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>]

---


### OrganizationRulesetBypassActorsOutputReference <a name="OrganizationRulesetBypassActorsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetBypassActorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resetActorId">reset_actor_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actor_id` <a name="reset_actor_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resetActorId"></a>

```python
def reset_actor_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorIdInput">actor_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorTypeInput">actor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassModeInput">bypass_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorId">actor_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorType">actor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassMode">bypass_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actor_id_input`<sup>Optional</sup> <a name="actor_id_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorIdInput"></a>

```python
actor_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `actor_type_input`<sup>Optional</sup> <a name="actor_type_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorTypeInput"></a>

```python
actor_type_input: str
```

- *Type:* str

---

##### `bypass_mode_input`<sup>Optional</sup> <a name="bypass_mode_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassModeInput"></a>

```python
bypass_mode_input: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorId"></a>

```python
actor_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `actor_type`<sup>Required</sup> <a name="actor_type" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorType"></a>

```python
actor_type: str
```

- *Type:* str

---

##### `bypass_mode`<sup>Required</sup> <a name="bypass_mode" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassMode"></a>

```python
bypass_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OrganizationRulesetBypassActors
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors">OrganizationRulesetBypassActors</a>

---


### OrganizationRulesetConditionsOutputReference <a name="OrganizationRulesetConditionsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName">put_ref_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName">put_repository_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryId">reset_repository_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryName">reset_repository_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ref_name` <a name="put_ref_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName"></a>

```python
def put_ref_name(
  exclude: typing.List[str],
  include: typing.List[str]
) -> None
```

###### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName.parameter.exclude"></a>

- *Type:* typing.List[str]

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

###### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName.parameter.include"></a>

- *Type:* typing.List[str]

Array of ref names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

##### `put_repository_name` <a name="put_repository_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName"></a>

```python
def put_repository_name(
  exclude: typing.List[str],
  include: typing.List[str],
  protected: bool | IResolvable = None
) -> None
```

###### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName.parameter.exclude"></a>

- *Type:* typing.List[str]

Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

###### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName.parameter.include"></a>

- *Type:* typing.List[str]

Array of repository names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

###### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName.parameter.protected"></a>

- *Type:* bool | cdktf.IResolvable

Whether renaming of target repositories is prevented.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#protected OrganizationRuleset#protected}

---

##### `reset_repository_id` <a name="reset_repository_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryId"></a>

```python
def reset_repository_id() -> None
```

##### `reset_repository_name` <a name="reset_repository_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryName"></a>

```python
def reset_repository_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refName">ref_name</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference">OrganizationRulesetConditionsRefNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryName">repository_name</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference">OrganizationRulesetConditionsRepositoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refNameInput">ref_name_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryIdInput">repository_id_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryId">repository_id</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref_name`<sup>Required</sup> <a name="ref_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refName"></a>

```python
ref_name: OrganizationRulesetConditionsRefNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference">OrganizationRulesetConditionsRefNameOutputReference</a>

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryName"></a>

```python
repository_name: OrganizationRulesetConditionsRepositoryNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference">OrganizationRulesetConditionsRepositoryNameOutputReference</a>

---

##### `ref_name_input`<sup>Optional</sup> <a name="ref_name_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refNameInput"></a>

```python
ref_name_input: OrganizationRulesetConditionsRefName
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryIdInput"></a>

```python
repository_id_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: OrganizationRulesetConditionsRepositoryName
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryId"></a>

```python
repository_id: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetConditions
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---


### OrganizationRulesetConditionsRefNameOutputReference <a name="OrganizationRulesetConditionsRefNameOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetConditionsRefName
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---


### OrganizationRulesetConditionsRepositoryNameOutputReference <a name="OrganizationRulesetConditionsRepositoryNameOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resetProtected">reset_protected</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_protected` <a name="reset_protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resetProtected"></a>

```python
def reset_protected() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protectedInput">protected_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protected">protected</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protected_input`<sup>Optional</sup> <a name="protected_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protectedInput"></a>

```python
protected_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protected"></a>

```python
protected: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetConditionsRepositoryName
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---


### OrganizationRulesetRulesBranchNamePatternOutputReference <a name="OrganizationRulesetRulesBranchNamePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetNegate">reset_negate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesBranchNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---


### OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference <a name="OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate">reset_negate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesCommitAuthorEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---


### OrganizationRulesetRulesCommitMessagePatternOutputReference <a name="OrganizationRulesetRulesCommitMessagePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetNegate">reset_negate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesCommitMessagePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---


### OrganizationRulesetRulesCommitterEmailPatternOutputReference <a name="OrganizationRulesetRulesCommitterEmailPatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetNegate">reset_negate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesCommitterEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---


### OrganizationRulesetRulesFileExtensionRestrictionOutputReference <a name="OrganizationRulesetRulesFileExtensionRestrictionOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.restrictedFileExtensionsInput">restricted_file_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.restrictedFileExtensions">restricted_file_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction">OrganizationRulesetRulesFileExtensionRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restricted_file_extensions_input`<sup>Optional</sup> <a name="restricted_file_extensions_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.restrictedFileExtensionsInput"></a>

```python
restricted_file_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_file_extensions`<sup>Required</sup> <a name="restricted_file_extensions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.restrictedFileExtensions"></a>

```python
restricted_file_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesFileExtensionRestriction
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction">OrganizationRulesetRulesFileExtensionRestriction</a>

---


### OrganizationRulesetRulesFilePathRestrictionOutputReference <a name="OrganizationRulesetRulesFilePathRestrictionOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.restrictedFilePathsInput">restricted_file_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.restrictedFilePaths">restricted_file_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction">OrganizationRulesetRulesFilePathRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restricted_file_paths_input`<sup>Optional</sup> <a name="restricted_file_paths_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.restrictedFilePathsInput"></a>

```python
restricted_file_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_file_paths`<sup>Required</sup> <a name="restricted_file_paths" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.restrictedFilePaths"></a>

```python
restricted_file_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesFilePathRestriction
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction">OrganizationRulesetRulesFilePathRestriction</a>

---


### OrganizationRulesetRulesMaxFilePathLengthOutputReference <a name="OrganizationRulesetRulesMaxFilePathLengthOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.maxFilePathLengthInput">max_file_path_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.maxFilePathLength">max_file_path_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength">OrganizationRulesetRulesMaxFilePathLength</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_file_path_length_input`<sup>Optional</sup> <a name="max_file_path_length_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.maxFilePathLengthInput"></a>

```python
max_file_path_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_file_path_length`<sup>Required</sup> <a name="max_file_path_length" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.maxFilePathLength"></a>

```python
max_file_path_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesMaxFilePathLength
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength">OrganizationRulesetRulesMaxFilePathLength</a>

---


### OrganizationRulesetRulesMaxFileSizeOutputReference <a name="OrganizationRulesetRulesMaxFileSizeOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.maxFileSizeInput">max_file_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize">OrganizationRulesetRulesMaxFileSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_file_size_input`<sup>Optional</sup> <a name="max_file_size_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.maxFileSizeInput"></a>

```python
max_file_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesMaxFileSize
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize">OrganizationRulesetRulesMaxFileSize</a>

---


### OrganizationRulesetRulesOutputReference <a name="OrganizationRulesetRulesOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern">put_branch_name_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern">put_commit_author_email_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern">put_commit_message_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern">put_committer_email_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putFileExtensionRestriction">put_file_extension_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putFilePathRestriction">put_file_path_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putMaxFilePathLength">put_max_file_path_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putMaxFileSize">put_max_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest">put_pull_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning">put_required_code_scanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks">put_required_status_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows">put_required_workflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern">put_tag_name_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetBranchNamePattern">reset_branch_name_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitAuthorEmailPattern">reset_commit_author_email_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitMessagePattern">reset_commit_message_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitterEmailPattern">reset_committer_email_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCreation">reset_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetDeletion">reset_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetFileExtensionRestriction">reset_file_extension_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetFilePathRestriction">reset_file_path_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetMaxFilePathLength">reset_max_file_path_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetMaxFileSize">reset_max_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetNonFastForward">reset_non_fast_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetPullRequest">reset_pull_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredCodeScanning">reset_required_code_scanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredLinearHistory">reset_required_linear_history</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredSignatures">reset_required_signatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredStatusChecks">reset_required_status_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredWorkflows">reset_required_workflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetTagNamePattern">reset_tag_name_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_branch_name_pattern` <a name="put_branch_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern"></a>

```python
def put_branch_name_pattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern.parameter.operator"></a>

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern.parameter.pattern"></a>

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern.parameter.name"></a>

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern.parameter.negate"></a>

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

##### `put_commit_author_email_pattern` <a name="put_commit_author_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern"></a>

```python
def put_commit_author_email_pattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.operator"></a>

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.pattern"></a>

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.name"></a>

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.negate"></a>

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

##### `put_commit_message_pattern` <a name="put_commit_message_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern"></a>

```python
def put_commit_message_pattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern.parameter.operator"></a>

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern.parameter.pattern"></a>

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern.parameter.name"></a>

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern.parameter.negate"></a>

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

##### `put_committer_email_pattern` <a name="put_committer_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern"></a>

```python
def put_committer_email_pattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern.parameter.operator"></a>

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern.parameter.pattern"></a>

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern.parameter.name"></a>

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern.parameter.negate"></a>

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

##### `put_file_extension_restriction` <a name="put_file_extension_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putFileExtensionRestriction"></a>

```python
def put_file_extension_restriction(
  restricted_file_extensions: typing.List[str]
) -> None
```

###### `restricted_file_extensions`<sup>Required</sup> <a name="restricted_file_extensions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putFileExtensionRestriction.parameter.restrictedFileExtensions"></a>

- *Type:* typing.List[str]

The file extensions that are restricted from being pushed to the commit graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#restricted_file_extensions OrganizationRuleset#restricted_file_extensions}

---

##### `put_file_path_restriction` <a name="put_file_path_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putFilePathRestriction"></a>

```python
def put_file_path_restriction(
  restricted_file_paths: typing.List[str]
) -> None
```

###### `restricted_file_paths`<sup>Required</sup> <a name="restricted_file_paths" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putFilePathRestriction.parameter.restrictedFilePaths"></a>

- *Type:* typing.List[str]

The file paths that are restricted from being pushed to the commit graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#restricted_file_paths OrganizationRuleset#restricted_file_paths}

---

##### `put_max_file_path_length` <a name="put_max_file_path_length" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putMaxFilePathLength"></a>

```python
def put_max_file_path_length(
  max_file_path_length: typing.Union[int, float]
) -> None
```

###### `max_file_path_length`<sup>Required</sup> <a name="max_file_path_length" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putMaxFilePathLength.parameter.maxFilePathLength"></a>

- *Type:* typing.Union[int, float]

The maximum allowed length of a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#max_file_path_length OrganizationRuleset#max_file_path_length}

---

##### `put_max_file_size` <a name="put_max_file_size" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putMaxFileSize"></a>

```python
def put_max_file_size(
  max_file_size: typing.Union[int, float]
) -> None
```

###### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putMaxFileSize.parameter.maxFileSize"></a>

- *Type:* typing.Union[int, float]

The maximum allowed size of a file in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#max_file_size OrganizationRuleset#max_file_size}

---

##### `put_pull_request` <a name="put_pull_request" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest"></a>

```python
def put_pull_request(
  dismiss_stale_reviews_on_push: bool | IResolvable = None,
  require_code_owner_review: bool | IResolvable = None,
  required_approving_review_count: typing.Union[int, float] = None,
  required_review_thread_resolution: bool | IResolvable = None,
  require_last_push_approval: bool | IResolvable = None
) -> None
```

###### `dismiss_stale_reviews_on_push`<sup>Optional</sup> <a name="dismiss_stale_reviews_on_push" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest.parameter.dismissStaleReviewsOnPush"></a>

- *Type:* bool | cdktf.IResolvable

New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#dismiss_stale_reviews_on_push OrganizationRuleset#dismiss_stale_reviews_on_push}

---

###### `require_code_owner_review`<sup>Optional</sup> <a name="require_code_owner_review" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest.parameter.requireCodeOwnerReview"></a>

- *Type:* bool | cdktf.IResolvable

Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#require_code_owner_review OrganizationRuleset#require_code_owner_review}

---

###### `required_approving_review_count`<sup>Optional</sup> <a name="required_approving_review_count" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest.parameter.requiredApprovingReviewCount"></a>

- *Type:* typing.Union[int, float]

The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_approving_review_count OrganizationRuleset#required_approving_review_count}

---

###### `required_review_thread_resolution`<sup>Optional</sup> <a name="required_review_thread_resolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest.parameter.requiredReviewThreadResolution"></a>

- *Type:* bool | cdktf.IResolvable

All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_review_thread_resolution OrganizationRuleset#required_review_thread_resolution}

---

###### `require_last_push_approval`<sup>Optional</sup> <a name="require_last_push_approval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest.parameter.requireLastPushApproval"></a>

- *Type:* bool | cdktf.IResolvable

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#require_last_push_approval OrganizationRuleset#require_last_push_approval}

---

##### `put_required_code_scanning` <a name="put_required_code_scanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning"></a>

```python
def put_required_code_scanning(
  required_code_scanning_tool: IResolvable | typing.List[OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool]
) -> None
```

###### `required_code_scanning_tool`<sup>Required</sup> <a name="required_code_scanning_tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredCodeScanning.parameter.requiredCodeScanningTool"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>]

required_code_scanning_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_code_scanning_tool OrganizationRuleset#required_code_scanning_tool}

---

##### `put_required_status_checks` <a name="put_required_status_checks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks"></a>

```python
def put_required_status_checks(
  required_check: IResolvable | typing.List[OrganizationRulesetRulesRequiredStatusChecksRequiredCheck],
  do_not_enforce_on_create: bool | IResolvable = None,
  strict_required_status_checks_policy: bool | IResolvable = None
) -> None
```

###### `required_check`<sup>Required</sup> <a name="required_check" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks.parameter.requiredCheck"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>]

required_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_check OrganizationRuleset#required_check}

---

###### `do_not_enforce_on_create`<sup>Optional</sup> <a name="do_not_enforce_on_create" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks.parameter.doNotEnforceOnCreate"></a>

- *Type:* bool | cdktf.IResolvable

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}

---

###### `strict_required_status_checks_policy`<sup>Optional</sup> <a name="strict_required_status_checks_policy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks.parameter.strictRequiredStatusChecksPolicy"></a>

- *Type:* bool | cdktf.IResolvable

Whether pull requests targeting a matching branch must be tested with the latest code.

This setting will not take effect unless at least one status check is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#strict_required_status_checks_policy OrganizationRuleset#strict_required_status_checks_policy}

---

##### `put_required_workflows` <a name="put_required_workflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows"></a>

```python
def put_required_workflows(
  required_workflow: IResolvable | typing.List[OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow],
  do_not_enforce_on_create: bool | IResolvable = None
) -> None
```

###### `required_workflow`<sup>Required</sup> <a name="required_workflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows.parameter.requiredWorkflow"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>]

required_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#required_workflow OrganizationRuleset#required_workflow}

---

###### `do_not_enforce_on_create`<sup>Optional</sup> <a name="do_not_enforce_on_create" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows.parameter.doNotEnforceOnCreate"></a>

- *Type:* bool | cdktf.IResolvable

Allow repositories and branches to be created if a check would otherwise prohibit it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#do_not_enforce_on_create OrganizationRuleset#do_not_enforce_on_create}

---

##### `put_tag_name_pattern` <a name="put_tag_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern"></a>

```python
def put_tag_name_pattern(
  operator: str,
  pattern: str,
  name: str = None,
  negate: bool | IResolvable = None
) -> None
```

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern.parameter.operator"></a>

- *Type:* str

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern.parameter.pattern"></a>

- *Type:* str

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern.parameter.name"></a>

- *Type:* str

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern.parameter.negate"></a>

- *Type:* bool | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

##### `reset_branch_name_pattern` <a name="reset_branch_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetBranchNamePattern"></a>

```python
def reset_branch_name_pattern() -> None
```

##### `reset_commit_author_email_pattern` <a name="reset_commit_author_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitAuthorEmailPattern"></a>

```python
def reset_commit_author_email_pattern() -> None
```

##### `reset_commit_message_pattern` <a name="reset_commit_message_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitMessagePattern"></a>

```python
def reset_commit_message_pattern() -> None
```

##### `reset_committer_email_pattern` <a name="reset_committer_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitterEmailPattern"></a>

```python
def reset_committer_email_pattern() -> None
```

##### `reset_creation` <a name="reset_creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCreation"></a>

```python
def reset_creation() -> None
```

##### `reset_deletion` <a name="reset_deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetDeletion"></a>

```python
def reset_deletion() -> None
```

##### `reset_file_extension_restriction` <a name="reset_file_extension_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetFileExtensionRestriction"></a>

```python
def reset_file_extension_restriction() -> None
```

##### `reset_file_path_restriction` <a name="reset_file_path_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetFilePathRestriction"></a>

```python
def reset_file_path_restriction() -> None
```

##### `reset_max_file_path_length` <a name="reset_max_file_path_length" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetMaxFilePathLength"></a>

```python
def reset_max_file_path_length() -> None
```

##### `reset_max_file_size` <a name="reset_max_file_size" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetMaxFileSize"></a>

```python
def reset_max_file_size() -> None
```

##### `reset_non_fast_forward` <a name="reset_non_fast_forward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetNonFastForward"></a>

```python
def reset_non_fast_forward() -> None
```

##### `reset_pull_request` <a name="reset_pull_request" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetPullRequest"></a>

```python
def reset_pull_request() -> None
```

##### `reset_required_code_scanning` <a name="reset_required_code_scanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredCodeScanning"></a>

```python
def reset_required_code_scanning() -> None
```

##### `reset_required_linear_history` <a name="reset_required_linear_history" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredLinearHistory"></a>

```python
def reset_required_linear_history() -> None
```

##### `reset_required_signatures` <a name="reset_required_signatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredSignatures"></a>

```python
def reset_required_signatures() -> None
```

##### `reset_required_status_checks` <a name="reset_required_status_checks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredStatusChecks"></a>

```python
def reset_required_status_checks() -> None
```

##### `reset_required_workflows` <a name="reset_required_workflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredWorkflows"></a>

```python
def reset_required_workflows() -> None
```

##### `reset_tag_name_pattern` <a name="reset_tag_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetTagNamePattern"></a>

```python
def reset_tag_name_pattern() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePattern">branch_name_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference">OrganizationRulesetRulesBranchNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPattern">commit_author_email_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference">OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePattern">commit_message_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference">OrganizationRulesetRulesCommitMessagePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPattern">committer_email_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference">OrganizationRulesetRulesCommitterEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fileExtensionRestriction">file_extension_restriction</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference">OrganizationRulesetRulesFileExtensionRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.filePathRestriction">file_path_restriction</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference">OrganizationRulesetRulesFilePathRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.maxFilePathLength">max_file_path_length</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference">OrganizationRulesetRulesMaxFilePathLengthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.maxFileSize">max_file_size</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference">OrganizationRulesetRulesMaxFileSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequest">pull_request</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference">OrganizationRulesetRulesPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanning">required_code_scanning</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference">OrganizationRulesetRulesRequiredCodeScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecks">required_status_checks</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference">OrganizationRulesetRulesRequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflows">required_workflows</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference">OrganizationRulesetRulesRequiredWorkflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePattern">tag_name_pattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference">OrganizationRulesetRulesTagNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePatternInput">branch_name_pattern_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPatternInput">commit_author_email_pattern_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePatternInput">commit_message_pattern_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPatternInput">committer_email_pattern_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationInput">creation_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletionInput">deletion_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fileExtensionRestrictionInput">file_extension_restriction_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction">OrganizationRulesetRulesFileExtensionRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.filePathRestrictionInput">file_path_restriction_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction">OrganizationRulesetRulesFilePathRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.maxFilePathLengthInput">max_file_path_length_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength">OrganizationRulesetRulesMaxFilePathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.maxFileSizeInput">max_file_size_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize">OrganizationRulesetRulesMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForwardInput">non_fast_forward_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequestInput">pull_request_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanningInput">required_code_scanning_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistoryInput">required_linear_history_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignaturesInput">required_signatures_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecksInput">required_status_checks_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflowsInput">required_workflows_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePatternInput">tag_name_pattern_input</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.updateInput">update_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creation">creation</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletion">deletion</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForward">non_fast_forward</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistory">required_linear_history</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignatures">required_signatures</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.update">update</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name_pattern`<sup>Required</sup> <a name="branch_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePattern"></a>

```python
branch_name_pattern: OrganizationRulesetRulesBranchNamePatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference">OrganizationRulesetRulesBranchNamePatternOutputReference</a>

---

##### `commit_author_email_pattern`<sup>Required</sup> <a name="commit_author_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPattern"></a>

```python
commit_author_email_pattern: OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference">OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference</a>

---

##### `commit_message_pattern`<sup>Required</sup> <a name="commit_message_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePattern"></a>

```python
commit_message_pattern: OrganizationRulesetRulesCommitMessagePatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference">OrganizationRulesetRulesCommitMessagePatternOutputReference</a>

---

##### `committer_email_pattern`<sup>Required</sup> <a name="committer_email_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPattern"></a>

```python
committer_email_pattern: OrganizationRulesetRulesCommitterEmailPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference">OrganizationRulesetRulesCommitterEmailPatternOutputReference</a>

---

##### `file_extension_restriction`<sup>Required</sup> <a name="file_extension_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fileExtensionRestriction"></a>

```python
file_extension_restriction: OrganizationRulesetRulesFileExtensionRestrictionOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestrictionOutputReference">OrganizationRulesetRulesFileExtensionRestrictionOutputReference</a>

---

##### `file_path_restriction`<sup>Required</sup> <a name="file_path_restriction" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.filePathRestriction"></a>

```python
file_path_restriction: OrganizationRulesetRulesFilePathRestrictionOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestrictionOutputReference">OrganizationRulesetRulesFilePathRestrictionOutputReference</a>

---

##### `max_file_path_length`<sup>Required</sup> <a name="max_file_path_length" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.maxFilePathLength"></a>

```python
max_file_path_length: OrganizationRulesetRulesMaxFilePathLengthOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLengthOutputReference">OrganizationRulesetRulesMaxFilePathLengthOutputReference</a>

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.maxFileSize"></a>

```python
max_file_size: OrganizationRulesetRulesMaxFileSizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSizeOutputReference">OrganizationRulesetRulesMaxFileSizeOutputReference</a>

---

##### `pull_request`<sup>Required</sup> <a name="pull_request" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequest"></a>

```python
pull_request: OrganizationRulesetRulesPullRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference">OrganizationRulesetRulesPullRequestOutputReference</a>

---

##### `required_code_scanning`<sup>Required</sup> <a name="required_code_scanning" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanning"></a>

```python
required_code_scanning: OrganizationRulesetRulesRequiredCodeScanningOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference">OrganizationRulesetRulesRequiredCodeScanningOutputReference</a>

---

##### `required_status_checks`<sup>Required</sup> <a name="required_status_checks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecks"></a>

```python
required_status_checks: OrganizationRulesetRulesRequiredStatusChecksOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference">OrganizationRulesetRulesRequiredStatusChecksOutputReference</a>

---

##### `required_workflows`<sup>Required</sup> <a name="required_workflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflows"></a>

```python
required_workflows: OrganizationRulesetRulesRequiredWorkflowsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference">OrganizationRulesetRulesRequiredWorkflowsOutputReference</a>

---

##### `tag_name_pattern`<sup>Required</sup> <a name="tag_name_pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePattern"></a>

```python
tag_name_pattern: OrganizationRulesetRulesTagNamePatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference">OrganizationRulesetRulesTagNamePatternOutputReference</a>

---

##### `branch_name_pattern_input`<sup>Optional</sup> <a name="branch_name_pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePatternInput"></a>

```python
branch_name_pattern_input: OrganizationRulesetRulesBranchNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---

##### `commit_author_email_pattern_input`<sup>Optional</sup> <a name="commit_author_email_pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPatternInput"></a>

```python
commit_author_email_pattern_input: OrganizationRulesetRulesCommitAuthorEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---

##### `commit_message_pattern_input`<sup>Optional</sup> <a name="commit_message_pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePatternInput"></a>

```python
commit_message_pattern_input: OrganizationRulesetRulesCommitMessagePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---

##### `committer_email_pattern_input`<sup>Optional</sup> <a name="committer_email_pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPatternInput"></a>

```python
committer_email_pattern_input: OrganizationRulesetRulesCommitterEmailPattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---

##### `creation_input`<sup>Optional</sup> <a name="creation_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationInput"></a>

```python
creation_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deletion_input`<sup>Optional</sup> <a name="deletion_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletionInput"></a>

```python
deletion_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `file_extension_restriction_input`<sup>Optional</sup> <a name="file_extension_restriction_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fileExtensionRestrictionInput"></a>

```python
file_extension_restriction_input: OrganizationRulesetRulesFileExtensionRestriction
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFileExtensionRestriction">OrganizationRulesetRulesFileExtensionRestriction</a>

---

##### `file_path_restriction_input`<sup>Optional</sup> <a name="file_path_restriction_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.filePathRestrictionInput"></a>

```python
file_path_restriction_input: OrganizationRulesetRulesFilePathRestriction
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesFilePathRestriction">OrganizationRulesetRulesFilePathRestriction</a>

---

##### `max_file_path_length_input`<sup>Optional</sup> <a name="max_file_path_length_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.maxFilePathLengthInput"></a>

```python
max_file_path_length_input: OrganizationRulesetRulesMaxFilePathLength
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFilePathLength">OrganizationRulesetRulesMaxFilePathLength</a>

---

##### `max_file_size_input`<sup>Optional</sup> <a name="max_file_size_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.maxFileSizeInput"></a>

```python
max_file_size_input: OrganizationRulesetRulesMaxFileSize
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesMaxFileSize">OrganizationRulesetRulesMaxFileSize</a>

---

##### `non_fast_forward_input`<sup>Optional</sup> <a name="non_fast_forward_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForwardInput"></a>

```python
non_fast_forward_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `pull_request_input`<sup>Optional</sup> <a name="pull_request_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequestInput"></a>

```python
pull_request_input: OrganizationRulesetRulesPullRequest
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---

##### `required_code_scanning_input`<sup>Optional</sup> <a name="required_code_scanning_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredCodeScanningInput"></a>

```python
required_code_scanning_input: OrganizationRulesetRulesRequiredCodeScanning
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

---

##### `required_linear_history_input`<sup>Optional</sup> <a name="required_linear_history_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistoryInput"></a>

```python
required_linear_history_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `required_signatures_input`<sup>Optional</sup> <a name="required_signatures_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignaturesInput"></a>

```python
required_signatures_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `required_status_checks_input`<sup>Optional</sup> <a name="required_status_checks_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecksInput"></a>

```python
required_status_checks_input: OrganizationRulesetRulesRequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---

##### `required_workflows_input`<sup>Optional</sup> <a name="required_workflows_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflowsInput"></a>

```python
required_workflows_input: OrganizationRulesetRulesRequiredWorkflows
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---

##### `tag_name_pattern_input`<sup>Optional</sup> <a name="tag_name_pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePatternInput"></a>

```python
tag_name_pattern_input: OrganizationRulesetRulesTagNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.updateInput"></a>

```python
update_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `creation`<sup>Required</sup> <a name="creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creation"></a>

```python
creation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deletion`<sup>Required</sup> <a name="deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletion"></a>

```python
deletion: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `non_fast_forward`<sup>Required</sup> <a name="non_fast_forward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForward"></a>

```python
non_fast_forward: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `required_linear_history`<sup>Required</sup> <a name="required_linear_history" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistory"></a>

```python
required_linear_history: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `required_signatures`<sup>Required</sup> <a name="required_signatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignatures"></a>

```python
required_signatures: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.update"></a>

```python
update: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRules
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---


### OrganizationRulesetRulesPullRequestOutputReference <a name="OrganizationRulesetRulesPullRequestOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush">reset_dismiss_stale_reviews_on_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview">reset_require_code_owner_review</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount">reset_required_approving_review_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution">reset_required_review_thread_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval">reset_require_last_push_approval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dismiss_stale_reviews_on_push` <a name="reset_dismiss_stale_reviews_on_push" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush"></a>

```python
def reset_dismiss_stale_reviews_on_push() -> None
```

##### `reset_require_code_owner_review` <a name="reset_require_code_owner_review" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview"></a>

```python
def reset_require_code_owner_review() -> None
```

##### `reset_required_approving_review_count` <a name="reset_required_approving_review_count" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount"></a>

```python
def reset_required_approving_review_count() -> None
```

##### `reset_required_review_thread_resolution` <a name="reset_required_review_thread_resolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution"></a>

```python
def reset_required_review_thread_resolution() -> None
```

##### `reset_require_last_push_approval` <a name="reset_require_last_push_approval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval"></a>

```python
def reset_require_last_push_approval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput">dismiss_stale_reviews_on_push_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput">require_code_owner_review_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput">required_approving_review_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput">required_review_thread_resolution_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput">require_last_push_approval_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush">dismiss_stale_reviews_on_push</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview">require_code_owner_review</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount">required_approving_review_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution">required_review_thread_resolution</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApproval">require_last_push_approval</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dismiss_stale_reviews_on_push_input`<sup>Optional</sup> <a name="dismiss_stale_reviews_on_push_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput"></a>

```python
dismiss_stale_reviews_on_push_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `require_code_owner_review_input`<sup>Optional</sup> <a name="require_code_owner_review_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput"></a>

```python
require_code_owner_review_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `required_approving_review_count_input`<sup>Optional</sup> <a name="required_approving_review_count_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput"></a>

```python
required_approving_review_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_review_thread_resolution_input`<sup>Optional</sup> <a name="required_review_thread_resolution_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput"></a>

```python
required_review_thread_resolution_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `require_last_push_approval_input`<sup>Optional</sup> <a name="require_last_push_approval_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput"></a>

```python
require_last_push_approval_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `dismiss_stale_reviews_on_push`<sup>Required</sup> <a name="dismiss_stale_reviews_on_push" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush"></a>

```python
dismiss_stale_reviews_on_push: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `require_code_owner_review`<sup>Required</sup> <a name="require_code_owner_review" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview"></a>

```python
require_code_owner_review: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `required_approving_review_count`<sup>Required</sup> <a name="required_approving_review_count" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount"></a>

```python
required_approving_review_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_review_thread_resolution`<sup>Required</sup> <a name="required_review_thread_resolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution"></a>

```python
required_review_thread_resolution: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `require_last_push_approval`<sup>Required</sup> <a name="require_last_push_approval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApproval"></a>

```python
require_last_push_approval: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesPullRequest
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---


### OrganizationRulesetRulesRequiredCodeScanningOutputReference <a name="OrganizationRulesetRulesRequiredCodeScanningOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool">put_required_code_scanning_tool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_required_code_scanning_tool` <a name="put_required_code_scanning_tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool"></a>

```python
def put_required_code_scanning_tool(
  value: IResolvable | typing.List[OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.putRequiredCodeScanningTool.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningTool">required_code_scanning_tool</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningToolInput">required_code_scanning_tool_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required_code_scanning_tool`<sup>Required</sup> <a name="required_code_scanning_tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningTool"></a>

```python
required_code_scanning_tool: OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList</a>

---

##### `required_code_scanning_tool_input`<sup>Optional</sup> <a name="required_code_scanning_tool_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.requiredCodeScanningToolInput"></a>

```python
required_code_scanning_tool_input: IResolvable | typing.List[OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesRequiredCodeScanning
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanning">OrganizationRulesetRulesRequiredCodeScanning</a>

---


### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>]

---


### OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference <a name="OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThresholdInput">alerts_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThresholdInput">security_alerts_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.toolInput">tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThreshold">alerts_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThreshold">security_alerts_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.tool">tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alerts_threshold_input`<sup>Optional</sup> <a name="alerts_threshold_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThresholdInput"></a>

```python
alerts_threshold_input: str
```

- *Type:* str

---

##### `security_alerts_threshold_input`<sup>Optional</sup> <a name="security_alerts_threshold_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThresholdInput"></a>

```python
security_alerts_threshold_input: str
```

- *Type:* str

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.toolInput"></a>

```python
tool_input: str
```

- *Type:* str

---

##### `alerts_threshold`<sup>Required</sup> <a name="alerts_threshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.alertsThreshold"></a>

```python
alerts_threshold: str
```

- *Type:* str

---

##### `security_alerts_threshold`<sup>Required</sup> <a name="security_alerts_threshold" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.securityAlertsThreshold"></a>

```python
security_alerts_threshold: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.tool"></a>

```python
tool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool">OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningTool</a>

---


### OrganizationRulesetRulesRequiredStatusChecksOutputReference <a name="OrganizationRulesetRulesRequiredStatusChecksOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck">put_required_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetDoNotEnforceOnCreate">reset_do_not_enforce_on_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy">reset_strict_required_status_checks_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_required_check` <a name="put_required_check" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck"></a>

```python
def put_required_check(
  value: IResolvable | typing.List[OrganizationRulesetRulesRequiredStatusChecksRequiredCheck]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>]

---

##### `reset_do_not_enforce_on_create` <a name="reset_do_not_enforce_on_create" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetDoNotEnforceOnCreate"></a>

```python
def reset_do_not_enforce_on_create() -> None
```

##### `reset_strict_required_status_checks_policy` <a name="reset_strict_required_status_checks_policy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy"></a>

```python
def reset_strict_required_status_checks_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck">required_check</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList">OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreateInput">do_not_enforce_on_create_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput">required_check_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput">strict_required_status_checks_policy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreate">do_not_enforce_on_create</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy">strict_required_status_checks_policy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required_check`<sup>Required</sup> <a name="required_check" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck"></a>

```python
required_check: OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList">OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList</a>

---

##### `do_not_enforce_on_create_input`<sup>Optional</sup> <a name="do_not_enforce_on_create_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreateInput"></a>

```python
do_not_enforce_on_create_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `required_check_input`<sup>Optional</sup> <a name="required_check_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput"></a>

```python
required_check_input: IResolvable | typing.List[OrganizationRulesetRulesRequiredStatusChecksRequiredCheck]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>]

---

##### `strict_required_status_checks_policy_input`<sup>Optional</sup> <a name="strict_required_status_checks_policy_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput"></a>

```python
strict_required_status_checks_policy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `do_not_enforce_on_create`<sup>Required</sup> <a name="do_not_enforce_on_create" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.doNotEnforceOnCreate"></a>

```python
do_not_enforce_on_create: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `strict_required_status_checks_policy`<sup>Required</sup> <a name="strict_required_status_checks_policy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy"></a>

```python
strict_required_status_checks_policy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesRequiredStatusChecks
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---


### OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OrganizationRulesetRulesRequiredStatusChecksRequiredCheck]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>]

---


### OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId">reset_integration_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_integration_id` <a name="reset_integration_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId"></a>

```python
def reset_integration_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput">integration_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId">integration_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput"></a>

```python
integration_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId"></a>

```python
integration_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OrganizationRulesetRulesRequiredStatusChecksRequiredCheck
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck">OrganizationRulesetRulesRequiredStatusChecksRequiredCheck</a>

---


### OrganizationRulesetRulesRequiredWorkflowsOutputReference <a name="OrganizationRulesetRulesRequiredWorkflowsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow">put_required_workflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resetDoNotEnforceOnCreate">reset_do_not_enforce_on_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_required_workflow` <a name="put_required_workflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow"></a>

```python
def put_required_workflow(
  value: IResolvable | typing.List[OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>]

---

##### `reset_do_not_enforce_on_create` <a name="reset_do_not_enforce_on_create" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resetDoNotEnforceOnCreate"></a>

```python
def reset_do_not_enforce_on_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflow">required_workflow</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreateInput">do_not_enforce_on_create_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflowInput">required_workflow_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreate">do_not_enforce_on_create</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required_workflow`<sup>Required</sup> <a name="required_workflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflow"></a>

```python
required_workflow: OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList</a>

---

##### `do_not_enforce_on_create_input`<sup>Optional</sup> <a name="do_not_enforce_on_create_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreateInput"></a>

```python
do_not_enforce_on_create_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `required_workflow_input`<sup>Optional</sup> <a name="required_workflow_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflowInput"></a>

```python
required_workflow_input: IResolvable | typing.List[OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>]

---

##### `do_not_enforce_on_create`<sup>Required</sup> <a name="do_not_enforce_on_create" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.doNotEnforceOnCreate"></a>

```python
do_not_enforce_on_create: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesRequiredWorkflows
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---


### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>]

---


### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resetRef">reset_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ref` <a name="reset_ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryIdInput">repository_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryId">repository_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryIdInput"></a>

```python
repository_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryId"></a>

```python
repository_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow</a>

---


### OrganizationRulesetRulesTagNamePatternOutputReference <a name="OrganizationRulesetRulesTagNamePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import organization_ruleset

organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetNegate">reset_negate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negateInput">negate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negate">negate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negateInput"></a>

```python
negate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negate"></a>

```python
negate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationRulesetRulesTagNamePattern
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---



