# `github_repository_ruleset`

Refer to the Terraform Registory for docs: [`github_repository_ruleset`](https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset).

# `repositoryRuleset` Submodule <a name="`repositoryRuleset` Submodule" id="@cdktf/provider-github.repositoryRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryRuleset <a name="RepositoryRuleset" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset github_repository_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRuleset(scope: Construct, id: string, config: RepositoryRulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig">RepositoryRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig">RepositoryRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors">putBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetBypassActors">resetBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBypassActors` <a name="putBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors"></a>

```typescript
public putBypassActors(value: IResolvable | RepositoryRulesetBypassActors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a>[]

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions"></a>

```typescript
public putConditions(value: RepositoryRulesetConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules"></a>

```typescript
public putRules(value: RepositoryRulesetRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---

##### `resetBypassActors` <a name="resetBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetBypassActors"></a>

```typescript
public resetBypassActors(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetRepository"></a>

```typescript
public resetRepository(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

repositoryRuleset.RepositoryRuleset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

repositoryRuleset.RepositoryRuleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

repositoryRuleset.RepositoryRuleset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActors">bypassActors</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList">RepositoryRulesetBypassActorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference">RepositoryRulesetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference">RepositoryRulesetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesetId">rulesetId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActorsInput">bypassActorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditionsInput">conditionsInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcementInput">enforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesInput">rulesInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcement">enforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bypassActors`<sup>Required</sup> <a name="bypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActors"></a>

```typescript
public readonly bypassActors: RepositoryRulesetBypassActorsList;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList">RepositoryRulesetBypassActorsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditions"></a>

```typescript
public readonly conditions: RepositoryRulesetConditionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference">RepositoryRulesetConditionsOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rules"></a>

```typescript
public readonly rules: RepositoryRulesetRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference">RepositoryRulesetRulesOutputReference</a>

---

##### `rulesetId`<sup>Required</sup> <a name="rulesetId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesetId"></a>

```typescript
public readonly rulesetId: number;
```

- *Type:* number

---

##### `bypassActorsInput`<sup>Optional</sup> <a name="bypassActorsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActorsInput"></a>

```typescript
public readonly bypassActorsInput: IResolvable | RepositoryRulesetBypassActors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a>[]

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: RepositoryRulesetConditions;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---

##### `enforcementInput`<sup>Optional</sup> <a name="enforcementInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcementInput"></a>

```typescript
public readonly enforcementInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesInput"></a>

```typescript
public readonly rulesInput: RepositoryRulesetRules;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcement"></a>

```typescript
public readonly enforcement: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryRulesetBypassActors <a name="RepositoryRulesetBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetBypassActors: repositoryRuleset.RepositoryRulesetBypassActors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorId">actorId</a></code> | <code>number</code> | The ID of the actor that can bypass a ruleset. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorType">actorType</a></code> | <code>string</code> | The type of actor that can bypass a ruleset. Can be one of: `RepositoryRole`, `Team`, `Integration`, `OrganizationAdmin`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.bypassMode">bypassMode</a></code> | <code>string</code> | When the specified actor can bypass the ruleset. |

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorId"></a>

```typescript
public readonly actorId: number;
```

- *Type:* number

The ID of the actor that can bypass a ruleset.

When `actor_type` is `OrganizationAdmin`, this should be set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#actor_id RepositoryRuleset#actor_id}

---

##### `actorType`<sup>Required</sup> <a name="actorType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorType"></a>

```typescript
public readonly actorType: string;
```

- *Type:* string

The type of actor that can bypass a ruleset. Can be one of: `RepositoryRole`, `Team`, `Integration`, `OrganizationAdmin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#actor_type RepositoryRuleset#actor_type}

---

##### `bypassMode`<sup>Required</sup> <a name="bypassMode" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.bypassMode"></a>

```typescript
public readonly bypassMode: string;
```

- *Type:* string

When the specified actor can bypass the ruleset.

pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#bypass_mode RepositoryRuleset#bypass_mode}

---

### RepositoryRulesetConditions <a name="RepositoryRulesetConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetConditions: repositoryRuleset.RepositoryRulesetConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.property.refName">refName</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | ref_name block. |

---

##### `refName`<sup>Required</sup> <a name="refName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.property.refName"></a>

```typescript
public readonly refName: RepositoryRulesetConditionsRefName;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

ref_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#ref_name RepositoryRuleset#ref_name}

---

### RepositoryRulesetConditionsRefName <a name="RepositoryRulesetConditionsRefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetConditionsRefName: repositoryRuleset.RepositoryRulesetConditionsRefName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.exclude">exclude</a></code> | <code>string[]</code> | Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.include">include</a></code> | <code>string[]</code> | Array of ref names or patterns to include. |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#exclude RepositoryRuleset#exclude}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

Array of ref names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#include RepositoryRuleset#include}

---

### RepositoryRulesetConfig <a name="RepositoryRulesetConfig" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetConfig: repositoryRuleset.RepositoryRulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.enforcement">enforcement</a></code> | <code>string</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.name">name</a></code> | <code>string</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.target">target</a></code> | <code>string</code> | Possible values are `branch` and `tag`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.bypassActors">bypassActors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a>[]</code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#id RepositoryRuleset#id}. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.repository">repository</a></code> | <code>string</code> | Name of the repository to apply rulset to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enforcement`<sup>Required</sup> <a name="enforcement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.enforcement"></a>

```typescript
public readonly enforcement: string;
```

- *Type:* string

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#enforcement RepositoryRuleset#enforcement}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.rules"></a>

```typescript
public readonly rules: RepositoryRulesetRules;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#rules RepositoryRuleset#rules}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Possible values are `branch` and `tag`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#target RepositoryRuleset#target}

---

##### `bypassActors`<sup>Optional</sup> <a name="bypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.bypassActors"></a>

```typescript
public readonly bypassActors: IResolvable | RepositoryRulesetBypassActors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a>[]

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#bypass_actors RepositoryRuleset#bypass_actors}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.conditions"></a>

```typescript
public readonly conditions: RepositoryRulesetConditions;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#conditions RepositoryRuleset#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#id RepositoryRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Name of the repository to apply rulset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#repository RepositoryRuleset#repository}

---

### RepositoryRulesetRules <a name="RepositoryRulesetRules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRules: repositoryRuleset.RepositoryRulesetRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.branchNamePattern">branchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | branch_name_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitAuthorEmailPattern">commitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | commit_author_email_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitMessagePattern">commitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | commit_message_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.committerEmailPattern">committerEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | committer_email_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.creation">creation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only allow users with bypass permission to create matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.deletion">deletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only allow users with bypass permissions to delete matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.nonFastForward">nonFastForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent users with push access from force pushing to branches. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredDeployments">requiredDeployments</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | required_deployments block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredLinearHistory">requiredLinearHistory</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent merge commits from being pushed to matching branches. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredSignatures">requiredSignatures</a></code> | <code>boolean \| cdktf.IResolvable</code> | Commits pushed to matching branches must have verified signatures. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.tagNamePattern">tagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | tag_name_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only allow users with bypass permission to update matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.updateAllowsFetchAndMerge">updateAllowsFetchAndMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | Branch can pull changes from its upstream repository. |

---

##### `branchNamePattern`<sup>Optional</sup> <a name="branchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.branchNamePattern"></a>

```typescript
public readonly branchNamePattern: RepositoryRulesetRulesBranchNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

branch_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#branch_name_pattern RepositoryRuleset#branch_name_pattern}

---

##### `commitAuthorEmailPattern`<sup>Optional</sup> <a name="commitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitAuthorEmailPattern"></a>

```typescript
public readonly commitAuthorEmailPattern: RepositoryRulesetRulesCommitAuthorEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

commit_author_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#commit_author_email_pattern RepositoryRuleset#commit_author_email_pattern}

---

##### `commitMessagePattern`<sup>Optional</sup> <a name="commitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitMessagePattern"></a>

```typescript
public readonly commitMessagePattern: RepositoryRulesetRulesCommitMessagePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

commit_message_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#commit_message_pattern RepositoryRuleset#commit_message_pattern}

---

##### `committerEmailPattern`<sup>Optional</sup> <a name="committerEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.committerEmailPattern"></a>

```typescript
public readonly committerEmailPattern: RepositoryRulesetRulesCommitterEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

committer_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#committer_email_pattern RepositoryRuleset#committer_email_pattern}

---

##### `creation`<sup>Optional</sup> <a name="creation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.creation"></a>

```typescript
public readonly creation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only allow users with bypass permission to create matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#creation RepositoryRuleset#creation}

---

##### `deletion`<sup>Optional</sup> <a name="deletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.deletion"></a>

```typescript
public readonly deletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only allow users with bypass permissions to delete matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#deletion RepositoryRuleset#deletion}

---

##### `nonFastForward`<sup>Optional</sup> <a name="nonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.nonFastForward"></a>

```typescript
public readonly nonFastForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent users with push access from force pushing to branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#non_fast_forward RepositoryRuleset#non_fast_forward}

---

##### `pullRequest`<sup>Optional</sup> <a name="pullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.pullRequest"></a>

```typescript
public readonly pullRequest: RepositoryRulesetRulesPullRequest;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#pull_request RepositoryRuleset#pull_request}

---

##### `requiredDeployments`<sup>Optional</sup> <a name="requiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredDeployments"></a>

```typescript
public readonly requiredDeployments: RepositoryRulesetRulesRequiredDeployments;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

required_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#required_deployments RepositoryRuleset#required_deployments}

---

##### `requiredLinearHistory`<sup>Optional</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredLinearHistory"></a>

```typescript
public readonly requiredLinearHistory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent merge commits from being pushed to matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#required_linear_history RepositoryRuleset#required_linear_history}

---

##### `requiredSignatures`<sup>Optional</sup> <a name="requiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredSignatures"></a>

```typescript
public readonly requiredSignatures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Commits pushed to matching branches must have verified signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#required_signatures RepositoryRuleset#required_signatures}

---

##### `requiredStatusChecks`<sup>Optional</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredStatusChecks"></a>

```typescript
public readonly requiredStatusChecks: RepositoryRulesetRulesRequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#required_status_checks RepositoryRuleset#required_status_checks}

---

##### `tagNamePattern`<sup>Optional</sup> <a name="tagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.tagNamePattern"></a>

```typescript
public readonly tagNamePattern: RepositoryRulesetRulesTagNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

tag_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#tag_name_pattern RepositoryRuleset#tag_name_pattern}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only allow users with bypass permission to update matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#update RepositoryRuleset#update}

---

##### `updateAllowsFetchAndMerge`<sup>Optional</sup> <a name="updateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.updateAllowsFetchAndMerge"></a>

```typescript
public readonly updateAllowsFetchAndMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Branch can pull changes from its upstream repository.

This is only applicable to forked repositories. Requires `update` to be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#update_allows_fetch_and_merge RepositoryRuleset#update_allows_fetch_and_merge}

---

### RepositoryRulesetRulesBranchNamePattern <a name="RepositoryRulesetRulesBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesBranchNamePattern: repositoryRuleset.RepositoryRulesetRulesBranchNamePattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitAuthorEmailPattern <a name="RepositoryRulesetRulesCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesCommitAuthorEmailPattern: repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitMessagePattern <a name="RepositoryRulesetRulesCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesCommitMessagePattern: repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitterEmailPattern <a name="RepositoryRulesetRulesCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesCommitterEmailPattern: repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesPullRequest <a name="RepositoryRulesetRulesPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesPullRequest: repositoryRuleset.RepositoryRulesetRulesPullRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.dismissStaleReviewsOnPush">dismissStaleReviewsOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireCodeOwnerReview">requireCodeOwnerReview</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>number</code> | The number of approving reviews that are required before a pull request can be merged. Defaults to `0`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredReviewThreadResolution">requiredReviewThreadResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | All conversations on code must be resolved before a pull request can be merged. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the most recent reviewable push must be approved by someone other than the person who pushed it. |

---

##### `dismissStaleReviewsOnPush`<sup>Optional</sup> <a name="dismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.dismissStaleReviewsOnPush"></a>

```typescript
public readonly dismissStaleReviewsOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#dismiss_stale_reviews_on_push RepositoryRuleset#dismiss_stale_reviews_on_push}

---

##### `requireCodeOwnerReview`<sup>Optional</sup> <a name="requireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireCodeOwnerReview"></a>

```typescript
public readonly requireCodeOwnerReview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#require_code_owner_review RepositoryRuleset#require_code_owner_review}

---

##### `requiredApprovingReviewCount`<sup>Optional</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredApprovingReviewCount"></a>

```typescript
public readonly requiredApprovingReviewCount: number;
```

- *Type:* number

The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#required_approving_review_count RepositoryRuleset#required_approving_review_count}

---

##### `requiredReviewThreadResolution`<sup>Optional</sup> <a name="requiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredReviewThreadResolution"></a>

```typescript
public readonly requiredReviewThreadResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#required_review_thread_resolution RepositoryRuleset#required_review_thread_resolution}

---

##### `requireLastPushApproval`<sup>Optional</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireLastPushApproval"></a>

```typescript
public readonly requireLastPushApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#require_last_push_approval RepositoryRuleset#require_last_push_approval}

---

### RepositoryRulesetRulesRequiredDeployments <a name="RepositoryRulesetRulesRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesRequiredDeployments: repositoryRuleset.RepositoryRulesetRulesRequiredDeployments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.property.requiredDeploymentEnvironments">requiredDeploymentEnvironments</a></code> | <code>string[]</code> | The environments that must be successfully deployed to before branches can be merged. |

---

##### `requiredDeploymentEnvironments`<sup>Optional</sup> <a name="requiredDeploymentEnvironments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.property.requiredDeploymentEnvironments"></a>

```typescript
public readonly requiredDeploymentEnvironments: string[];
```

- *Type:* string[]

The environments that must be successfully deployed to before branches can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#required_deployment_environments RepositoryRuleset#required_deployment_environments}

---

### RepositoryRulesetRulesRequiredStatusChecks <a name="RepositoryRulesetRulesRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesRequiredStatusChecks: repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.requiredCheck">requiredCheck</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a>[]</code> | required_check block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy">strictRequiredStatusChecksPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether pull requests targeting a matching branch must be tested with the latest code. |

---

##### `requiredCheck`<sup>Required</sup> <a name="requiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.requiredCheck"></a>

```typescript
public readonly requiredCheck: IResolvable | RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a>[]

required_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#required_check RepositoryRuleset#required_check}

---

##### `strictRequiredStatusChecksPolicy`<sup>Optional</sup> <a name="strictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy"></a>

```typescript
public readonly strictRequiredStatusChecksPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether pull requests targeting a matching branch must be tested with the latest code.

This setting will not take effect unless at least one status check is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#strict_required_status_checks_policy RepositoryRuleset#strict_required_status_checks_policy}

---

### RepositoryRulesetRulesRequiredStatusChecksRequiredCheck <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesRequiredStatusChecksRequiredCheck: repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.context">context</a></code> | <code>string</code> | The status check context name that must be present on the commit. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId">integrationId</a></code> | <code>number</code> | The optional integration ID that this status check must originate from. |

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

The status check context name that must be present on the commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#context RepositoryRuleset#context}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId"></a>

```typescript
public readonly integrationId: number;
```

- *Type:* number

The optional integration ID that this status check must originate from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#integration_id RepositoryRuleset#integration_id}

---

### RepositoryRulesetRulesTagNamePattern <a name="RepositoryRulesetRulesTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

const repositoryRulesetRulesTagNamePattern: repositoryRuleset.RepositoryRulesetRulesTagNamePattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.operator">operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.pattern">pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.name">name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the rule will fail if the pattern matches. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.38.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryRulesetBypassActorsList <a name="RepositoryRulesetBypassActorsList" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetBypassActorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get"></a>

```typescript
public get(index: number): RepositoryRulesetBypassActorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryRulesetBypassActors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a>[]

---


### RepositoryRulesetBypassActorsOutputReference <a name="RepositoryRulesetBypassActorsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetBypassActorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorIdInput">actorIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorTypeInput">actorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassModeInput">bypassModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorId">actorId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorType">actorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassMode">bypassMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorIdInput"></a>

```typescript
public readonly actorIdInput: number;
```

- *Type:* number

---

##### `actorTypeInput`<sup>Optional</sup> <a name="actorTypeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorTypeInput"></a>

```typescript
public readonly actorTypeInput: string;
```

- *Type:* string

---

##### `bypassModeInput`<sup>Optional</sup> <a name="bypassModeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassModeInput"></a>

```typescript
public readonly bypassModeInput: string;
```

- *Type:* string

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorId"></a>

```typescript
public readonly actorId: number;
```

- *Type:* number

---

##### `actorType`<sup>Required</sup> <a name="actorType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorType"></a>

```typescript
public readonly actorType: string;
```

- *Type:* string

---

##### `bypassMode`<sup>Required</sup> <a name="bypassMode" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassMode"></a>

```typescript
public readonly bypassMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryRulesetBypassActors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors">RepositoryRulesetBypassActors</a>

---


### RepositoryRulesetConditionsOutputReference <a name="RepositoryRulesetConditionsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName">putRefName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRefName` <a name="putRefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName"></a>

```typescript
public putRefName(value: RepositoryRulesetConditionsRefName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refName">refName</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference">RepositoryRulesetConditionsRefNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refNameInput">refNameInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `refName`<sup>Required</sup> <a name="refName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refName"></a>

```typescript
public readonly refName: RepositoryRulesetConditionsRefNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference">RepositoryRulesetConditionsRefNameOutputReference</a>

---

##### `refNameInput`<sup>Optional</sup> <a name="refNameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refNameInput"></a>

```typescript
public readonly refNameInput: RepositoryRulesetConditionsRefName;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetConditions;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---


### RepositoryRulesetConditionsRefNameOutputReference <a name="RepositoryRulesetConditionsRefNameOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetConditionsRefName;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---


### RepositoryRulesetRulesBranchNamePatternOutputReference <a name="RepositoryRulesetRulesBranchNamePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRulesBranchNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---


### RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference <a name="RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRulesCommitAuthorEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---


### RepositoryRulesetRulesCommitMessagePatternOutputReference <a name="RepositoryRulesetRulesCommitMessagePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRulesCommitMessagePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---


### RepositoryRulesetRulesCommitterEmailPatternOutputReference <a name="RepositoryRulesetRulesCommitterEmailPatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRulesCommitterEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---


### RepositoryRulesetRulesOutputReference <a name="RepositoryRulesetRulesOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern">putBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern">putCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern">putCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern">putCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest">putPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments">putRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks">putRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern">putTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetBranchNamePattern">resetBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitAuthorEmailPattern">resetCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitMessagePattern">resetCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitterEmailPattern">resetCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCreation">resetCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetDeletion">resetDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetNonFastForward">resetNonFastForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetPullRequest">resetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredDeployments">resetRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredLinearHistory">resetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredSignatures">resetRequiredSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredStatusChecks">resetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetTagNamePattern">resetTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdateAllowsFetchAndMerge">resetUpdateAllowsFetchAndMerge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBranchNamePattern` <a name="putBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern"></a>

```typescript
public putBranchNamePattern(value: RepositoryRulesetRulesBranchNamePattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---

##### `putCommitAuthorEmailPattern` <a name="putCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern"></a>

```typescript
public putCommitAuthorEmailPattern(value: RepositoryRulesetRulesCommitAuthorEmailPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---

##### `putCommitMessagePattern` <a name="putCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern"></a>

```typescript
public putCommitMessagePattern(value: RepositoryRulesetRulesCommitMessagePattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---

##### `putCommitterEmailPattern` <a name="putCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern"></a>

```typescript
public putCommitterEmailPattern(value: RepositoryRulesetRulesCommitterEmailPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---

##### `putPullRequest` <a name="putPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest"></a>

```typescript
public putPullRequest(value: RepositoryRulesetRulesPullRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---

##### `putRequiredDeployments` <a name="putRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments"></a>

```typescript
public putRequiredDeployments(value: RepositoryRulesetRulesRequiredDeployments): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---

##### `putRequiredStatusChecks` <a name="putRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks"></a>

```typescript
public putRequiredStatusChecks(value: RepositoryRulesetRulesRequiredStatusChecks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---

##### `putTagNamePattern` <a name="putTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern"></a>

```typescript
public putTagNamePattern(value: RepositoryRulesetRulesTagNamePattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---

##### `resetBranchNamePattern` <a name="resetBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetBranchNamePattern"></a>

```typescript
public resetBranchNamePattern(): void
```

##### `resetCommitAuthorEmailPattern` <a name="resetCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitAuthorEmailPattern"></a>

```typescript
public resetCommitAuthorEmailPattern(): void
```

##### `resetCommitMessagePattern` <a name="resetCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitMessagePattern"></a>

```typescript
public resetCommitMessagePattern(): void
```

##### `resetCommitterEmailPattern` <a name="resetCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitterEmailPattern"></a>

```typescript
public resetCommitterEmailPattern(): void
```

##### `resetCreation` <a name="resetCreation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCreation"></a>

```typescript
public resetCreation(): void
```

##### `resetDeletion` <a name="resetDeletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetDeletion"></a>

```typescript
public resetDeletion(): void
```

##### `resetNonFastForward` <a name="resetNonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetNonFastForward"></a>

```typescript
public resetNonFastForward(): void
```

##### `resetPullRequest` <a name="resetPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetPullRequest"></a>

```typescript
public resetPullRequest(): void
```

##### `resetRequiredDeployments` <a name="resetRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredDeployments"></a>

```typescript
public resetRequiredDeployments(): void
```

##### `resetRequiredLinearHistory` <a name="resetRequiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredLinearHistory"></a>

```typescript
public resetRequiredLinearHistory(): void
```

##### `resetRequiredSignatures` <a name="resetRequiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredSignatures"></a>

```typescript
public resetRequiredSignatures(): void
```

##### `resetRequiredStatusChecks` <a name="resetRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredStatusChecks"></a>

```typescript
public resetRequiredStatusChecks(): void
```

##### `resetTagNamePattern` <a name="resetTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetTagNamePattern"></a>

```typescript
public resetTagNamePattern(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```

##### `resetUpdateAllowsFetchAndMerge` <a name="resetUpdateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdateAllowsFetchAndMerge"></a>

```typescript
public resetUpdateAllowsFetchAndMerge(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePattern">branchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference">RepositoryRulesetRulesBranchNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPattern">commitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference">RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePattern">commitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference">RepositoryRulesetRulesCommitMessagePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPattern">committerEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference">RepositoryRulesetRulesCommitterEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference">RepositoryRulesetRulesPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeployments">requiredDeployments</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference">RepositoryRulesetRulesRequiredDeploymentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecks">requiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference">RepositoryRulesetRulesRequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePattern">tagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference">RepositoryRulesetRulesTagNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePatternInput">branchNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPatternInput">commitAuthorEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePatternInput">commitMessagePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPatternInput">committerEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationInput">creationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletionInput">deletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForwardInput">nonFastForwardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequestInput">pullRequestInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeploymentsInput">requiredDeploymentsInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistoryInput">requiredLinearHistoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignaturesInput">requiredSignaturesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecksInput">requiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePatternInput">tagNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMergeInput">updateAllowsFetchAndMergeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateInput">updateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creation">creation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletion">deletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForward">nonFastForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistory">requiredLinearHistory</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignatures">requiredSignatures</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMerge">updateAllowsFetchAndMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchNamePattern`<sup>Required</sup> <a name="branchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePattern"></a>

```typescript
public readonly branchNamePattern: RepositoryRulesetRulesBranchNamePatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference">RepositoryRulesetRulesBranchNamePatternOutputReference</a>

---

##### `commitAuthorEmailPattern`<sup>Required</sup> <a name="commitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPattern"></a>

```typescript
public readonly commitAuthorEmailPattern: RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference">RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference</a>

---

##### `commitMessagePattern`<sup>Required</sup> <a name="commitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePattern"></a>

```typescript
public readonly commitMessagePattern: RepositoryRulesetRulesCommitMessagePatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference">RepositoryRulesetRulesCommitMessagePatternOutputReference</a>

---

##### `committerEmailPattern`<sup>Required</sup> <a name="committerEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPattern"></a>

```typescript
public readonly committerEmailPattern: RepositoryRulesetRulesCommitterEmailPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference">RepositoryRulesetRulesCommitterEmailPatternOutputReference</a>

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequest"></a>

```typescript
public readonly pullRequest: RepositoryRulesetRulesPullRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference">RepositoryRulesetRulesPullRequestOutputReference</a>

---

##### `requiredDeployments`<sup>Required</sup> <a name="requiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeployments"></a>

```typescript
public readonly requiredDeployments: RepositoryRulesetRulesRequiredDeploymentsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference">RepositoryRulesetRulesRequiredDeploymentsOutputReference</a>

---

##### `requiredStatusChecks`<sup>Required</sup> <a name="requiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecks"></a>

```typescript
public readonly requiredStatusChecks: RepositoryRulesetRulesRequiredStatusChecksOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference">RepositoryRulesetRulesRequiredStatusChecksOutputReference</a>

---

##### `tagNamePattern`<sup>Required</sup> <a name="tagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePattern"></a>

```typescript
public readonly tagNamePattern: RepositoryRulesetRulesTagNamePatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference">RepositoryRulesetRulesTagNamePatternOutputReference</a>

---

##### `branchNamePatternInput`<sup>Optional</sup> <a name="branchNamePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePatternInput"></a>

```typescript
public readonly branchNamePatternInput: RepositoryRulesetRulesBranchNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---

##### `commitAuthorEmailPatternInput`<sup>Optional</sup> <a name="commitAuthorEmailPatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPatternInput"></a>

```typescript
public readonly commitAuthorEmailPatternInput: RepositoryRulesetRulesCommitAuthorEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---

##### `commitMessagePatternInput`<sup>Optional</sup> <a name="commitMessagePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePatternInput"></a>

```typescript
public readonly commitMessagePatternInput: RepositoryRulesetRulesCommitMessagePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---

##### `committerEmailPatternInput`<sup>Optional</sup> <a name="committerEmailPatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPatternInput"></a>

```typescript
public readonly committerEmailPatternInput: RepositoryRulesetRulesCommitterEmailPattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---

##### `creationInput`<sup>Optional</sup> <a name="creationInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationInput"></a>

```typescript
public readonly creationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionInput`<sup>Optional</sup> <a name="deletionInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletionInput"></a>

```typescript
public readonly deletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nonFastForwardInput`<sup>Optional</sup> <a name="nonFastForwardInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForwardInput"></a>

```typescript
public readonly nonFastForwardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pullRequestInput`<sup>Optional</sup> <a name="pullRequestInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequestInput"></a>

```typescript
public readonly pullRequestInput: RepositoryRulesetRulesPullRequest;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---

##### `requiredDeploymentsInput`<sup>Optional</sup> <a name="requiredDeploymentsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeploymentsInput"></a>

```typescript
public readonly requiredDeploymentsInput: RepositoryRulesetRulesRequiredDeployments;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---

##### `requiredLinearHistoryInput`<sup>Optional</sup> <a name="requiredLinearHistoryInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistoryInput"></a>

```typescript
public readonly requiredLinearHistoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredSignaturesInput`<sup>Optional</sup> <a name="requiredSignaturesInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignaturesInput"></a>

```typescript
public readonly requiredSignaturesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredStatusChecksInput`<sup>Optional</sup> <a name="requiredStatusChecksInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecksInput"></a>

```typescript
public readonly requiredStatusChecksInput: RepositoryRulesetRulesRequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---

##### `tagNamePatternInput`<sup>Optional</sup> <a name="tagNamePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePatternInput"></a>

```typescript
public readonly tagNamePatternInput: RepositoryRulesetRulesTagNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---

##### `updateAllowsFetchAndMergeInput`<sup>Optional</sup> <a name="updateAllowsFetchAndMergeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMergeInput"></a>

```typescript
public readonly updateAllowsFetchAndMergeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `creation`<sup>Required</sup> <a name="creation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creation"></a>

```typescript
public readonly creation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletion`<sup>Required</sup> <a name="deletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletion"></a>

```typescript
public readonly deletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nonFastForward`<sup>Required</sup> <a name="nonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForward"></a>

```typescript
public readonly nonFastForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredLinearHistory`<sup>Required</sup> <a name="requiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistory"></a>

```typescript
public readonly requiredLinearHistory: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredSignatures`<sup>Required</sup> <a name="requiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignatures"></a>

```typescript
public readonly requiredSignatures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `updateAllowsFetchAndMerge`<sup>Required</sup> <a name="updateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMerge"></a>

```typescript
public readonly updateAllowsFetchAndMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRules;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---


### RepositoryRulesetRulesPullRequestOutputReference <a name="RepositoryRulesetRulesPullRequestOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush">resetDismissStaleReviewsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview">resetRequireCodeOwnerReview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount">resetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution">resetRequiredReviewThreadResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval">resetRequireLastPushApproval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDismissStaleReviewsOnPush` <a name="resetDismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush"></a>

```typescript
public resetDismissStaleReviewsOnPush(): void
```

##### `resetRequireCodeOwnerReview` <a name="resetRequireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview"></a>

```typescript
public resetRequireCodeOwnerReview(): void
```

##### `resetRequiredApprovingReviewCount` <a name="resetRequiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount"></a>

```typescript
public resetRequiredApprovingReviewCount(): void
```

##### `resetRequiredReviewThreadResolution` <a name="resetRequiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution"></a>

```typescript
public resetRequiredReviewThreadResolution(): void
```

##### `resetRequireLastPushApproval` <a name="resetRequireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval"></a>

```typescript
public resetRequireLastPushApproval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput">dismissStaleReviewsOnPushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput">requireCodeOwnerReviewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput">requiredApprovingReviewCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput">requiredReviewThreadResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput">requireLastPushApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush">dismissStaleReviewsOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview">requireCodeOwnerReview</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount">requiredApprovingReviewCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution">requiredReviewThreadResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApproval">requireLastPushApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dismissStaleReviewsOnPushInput`<sup>Optional</sup> <a name="dismissStaleReviewsOnPushInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput"></a>

```typescript
public readonly dismissStaleReviewsOnPushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCodeOwnerReviewInput`<sup>Optional</sup> <a name="requireCodeOwnerReviewInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput"></a>

```typescript
public readonly requireCodeOwnerReviewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredApprovingReviewCountInput`<sup>Optional</sup> <a name="requiredApprovingReviewCountInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput"></a>

```typescript
public readonly requiredApprovingReviewCountInput: number;
```

- *Type:* number

---

##### `requiredReviewThreadResolutionInput`<sup>Optional</sup> <a name="requiredReviewThreadResolutionInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput"></a>

```typescript
public readonly requiredReviewThreadResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireLastPushApprovalInput`<sup>Optional</sup> <a name="requireLastPushApprovalInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput"></a>

```typescript
public readonly requireLastPushApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dismissStaleReviewsOnPush`<sup>Required</sup> <a name="dismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush"></a>

```typescript
public readonly dismissStaleReviewsOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCodeOwnerReview`<sup>Required</sup> <a name="requireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview"></a>

```typescript
public readonly requireCodeOwnerReview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredApprovingReviewCount`<sup>Required</sup> <a name="requiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount"></a>

```typescript
public readonly requiredApprovingReviewCount: number;
```

- *Type:* number

---

##### `requiredReviewThreadResolution`<sup>Required</sup> <a name="requiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution"></a>

```typescript
public readonly requiredReviewThreadResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireLastPushApproval`<sup>Required</sup> <a name="requireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApproval"></a>

```typescript
public readonly requireLastPushApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRulesPullRequest;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---


### RepositoryRulesetRulesRequiredDeploymentsOutputReference <a name="RepositoryRulesetRulesRequiredDeploymentsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resetRequiredDeploymentEnvironments">resetRequiredDeploymentEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequiredDeploymentEnvironments` <a name="resetRequiredDeploymentEnvironments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resetRequiredDeploymentEnvironments"></a>

```typescript
public resetRequiredDeploymentEnvironments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironmentsInput">requiredDeploymentEnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironments">requiredDeploymentEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requiredDeploymentEnvironmentsInput`<sup>Optional</sup> <a name="requiredDeploymentEnvironmentsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironmentsInput"></a>

```typescript
public readonly requiredDeploymentEnvironmentsInput: string[];
```

- *Type:* string[]

---

##### `requiredDeploymentEnvironments`<sup>Required</sup> <a name="requiredDeploymentEnvironments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironments"></a>

```typescript
public readonly requiredDeploymentEnvironments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRulesRequiredDeployments;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---


### RepositoryRulesetRulesRequiredStatusChecksOutputReference <a name="RepositoryRulesetRulesRequiredStatusChecksOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck">putRequiredCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy">resetStrictRequiredStatusChecksPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequiredCheck` <a name="putRequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck"></a>

```typescript
public putRequiredCheck(value: IResolvable | RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a>[]

---

##### `resetStrictRequiredStatusChecksPolicy` <a name="resetStrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy"></a>

```typescript
public resetStrictRequiredStatusChecksPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck">requiredCheck</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList">RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput">requiredCheckInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput">strictRequiredStatusChecksPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy">strictRequiredStatusChecksPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requiredCheck`<sup>Required</sup> <a name="requiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck"></a>

```typescript
public readonly requiredCheck: RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList">RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList</a>

---

##### `requiredCheckInput`<sup>Optional</sup> <a name="requiredCheckInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput"></a>

```typescript
public readonly requiredCheckInput: IResolvable | RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a>[]

---

##### `strictRequiredStatusChecksPolicyInput`<sup>Optional</sup> <a name="strictRequiredStatusChecksPolicyInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput"></a>

```typescript
public readonly strictRequiredStatusChecksPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strictRequiredStatusChecksPolicy`<sup>Required</sup> <a name="strictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy"></a>

```typescript
public readonly strictRequiredStatusChecksPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRulesRequiredStatusChecks;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---


### RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get"></a>

```typescript
public get(index: number): RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryRulesetRulesRequiredStatusChecksRequiredCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a>[]

---


### RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId"></a>

```typescript
public resetIntegrationId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput">integrationIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId">integrationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: number;
```

- *Type:* number

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId"></a>

```typescript
public readonly integrationId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryRulesetRulesRequiredStatusChecksRequiredCheck;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck">RepositoryRulesetRulesRequiredStatusChecksRequiredCheck</a>

---


### RepositoryRulesetRulesTagNamePatternOutputReference <a name="RepositoryRulesetRulesTagNamePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer"></a>

```typescript
import { repositoryRuleset } from '@cdktf/provider-github'

new repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetNegate">resetNegate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryRulesetRulesTagNamePattern;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---



